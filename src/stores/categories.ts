import { comparators } from '@/helpers'
import qbit from '@/services/qbit'
import { Category } from '@/types/qbit/models'
import { faker } from '@faker-js/faker/locale/en'
import { useSorted } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, triggerRef } from 'vue'

export const useCategoryStore = defineStore('categories', () => {
  /** Key: Category name */
  const _categoryMap = shallowRef<Map<string, Category>>(new Map())
  const anonymizedMap = shallowRef(new Map<string, string>())

  const categories = useSorted(
    () => Array.from(_categoryMap.value.values()),
    (a, b) => comparators.text.asc(a.name, b.name)
  )

  function syncFromMaindata(fullUpdate: boolean, entries: [string, Partial<Category>][], removed?: string[]) {
    if (fullUpdate) {
      _categoryMap.value = new Map(entries as [string, Category][])
      anonymizedMap.value = new Map(entries.map(([name]) => [name, faker.word.sample()]))
      return
    }

    for (const [catName, qbitCat] of entries) {
      const oldCat = _categoryMap.value.get(catName)
      if (qbitCat.name) {
        anonymizedMap.value.set(qbitCat.name, faker.word.sample())
      }
      _categoryMap.value.set(catName, {
        name: qbitCat.name ?? oldCat?.name ?? catName,
        savePath: qbitCat.savePath ?? oldCat?.savePath ?? ''
      })
    }
    removed?.forEach(c => {
      _categoryMap.value.delete(c)
      anonymizedMap.value.delete(c)
    })
    triggerRef(_categoryMap)
    triggerRef(anonymizedMap)
  }

  function getCategoryFromName(categoryName?: string) {
    if (!categoryName) return
    return _categoryMap.value.get(categoryName)
  }

  async function createCategory(category: Category) {
    await qbit.createCategory(category)
  }

  async function editCategory(category: Category, oldCategory?: string) {
    if (oldCategory) {
      // Create new category
      await qbit.createCategory(category)

      // Move old category torrent to new location
      await qbit.editCategory({ name: oldCategory, savePath: category.savePath })

      // Get list of torrents in old category and move them to new category
      const torrents = await qbit.getTorrents({ category: oldCategory })
      if (torrents.length > 0) {
        await qbit.setCategory(
          torrents.map(torrent => torrent.hash),
          category.name
        )
      }

      // Delete old category
      await qbit.deleteCategory([oldCategory])
      return torrents.length
    } else {
      await qbit.editCategory(category)
    }
  }

  async function deleteCategories(categoryNames: string[]) {
    await qbit.deleteCategory(categoryNames)
  }

  return {
    anonymizedMap,
    categories,
    syncFromMaindata,
    getCategoryFromName,
    createCategory,
    editCategory,
    deleteCategories,
    $reset: () => {
      _categoryMap.value.clear()
      anonymizedMap.value.clear()
      triggerRef(_categoryMap)
      triggerRef(anonymizedMap)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}
