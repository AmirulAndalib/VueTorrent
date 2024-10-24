import { comparators } from '@/helpers'
import qbit from '@/services/qbit'
import { faker } from '@faker-js/faker/locale/en'
import { useSorted } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef, triggerRef } from 'vue'

export const useTagStore = defineStore('tags', () => {
  const _tags = shallowRef<Set<string>>(new Set())
  const anonymizedMap = shallowRef(new Map<string, string>())
  const tags = useSorted(() => Array.from(_tags.value.values()), comparators.text.asc)

  function syncFromMaindata(fullUpdate: boolean, values: string[], removed?: string[]) {
    if (fullUpdate) {
      _tags.value = new Set(values)
      anonymizedMap.value = new Map(values.map(v => [v, faker.word.sample()]))
      return
    }

    values.forEach(tag => {
      _tags.value.add(tag)
      anonymizedMap.value.set(tag, faker.word.sample())
    })
    removed?.forEach(tag => {
      _tags.value.delete(tag)
      anonymizedMap.value.delete(tag)
    })
    triggerRef(_tags)
    triggerRef(anonymizedMap)
  }

  async function createTags(tags: string[]) {
    await qbit.createTag(tags)
  }

  async function editTag(oldTag: string, newTag: string) {
    if (oldTag === newTag) return

    // Create new tag
    await qbit.createTag([newTag])

    // Get list of torrents in old tag and move them to new tag
    const torrents = await qbit.getTorrents({ tag: oldTag })
    if (torrents.length > 0) {
      await qbit.addTorrentTag(
        torrents.map(torrent => torrent.hash),
        [newTag]
      )
    }

    // Delete old tag
    await qbit.deleteTags([oldTag])
  }

  async function deleteTags(tags: string[]) {
    await qbit.deleteTags(tags)
  }

  return {
    anonymizedMap,
    tags,
    syncFromMaindata,
    createTags,
    editTag,
    deleteTags,
    $reset: () => {
      _tags.value.clear()
      anonymizedMap.value.clear()
      triggerRef(_tags)
      triggerRef(anonymizedMap)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTagStore, import.meta.hot))
}
