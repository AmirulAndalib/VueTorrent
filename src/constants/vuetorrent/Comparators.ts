import comparators, { Comparator } from '@/helpers/comparators'
import Torrent from '@/types/vuetorrent/Torrent'

const comparatorMap: Record<keyof Torrent, Comparator> = {
  added_on: comparators.numeric,
  amount_left: comparators.numeric,
  auto_tmm: comparators.boolean,
  availability: comparators.numeric,
  available_peers: comparators.numeric,
  available_seeds: comparators.numeric,
  avgDownloadSpeed: comparators.numeric,
  avgUploadSpeed: comparators.numeric,
  basename_content_path: comparators.textWithNumbers,
  basename_download_path: comparators.textWithNumbers,
  basename_save_path: comparators.textWithNumbers,
  category: comparators.textWithNumbers,
  completed_on: comparators.numeric,
  content_path: comparators.textWithNumbers,
  dl_limit: comparators.numeric,
  dlspeed: comparators.numeric,
  download_path: comparators.textWithNumbers,
  downloaded: comparators.numeric,
  downloaded_session: comparators.numeric,
  eta: comparators.numeric,
  f_l_piece_prio: comparators.boolean,
  forced: comparators.boolean,
  globalSpeed: comparators.numeric,
  globalVolume: comparators.numeric,
  hash: comparators.text,
  inactive_seeding_time_limit: comparators.numeric,
  infohash_v1: comparators.text,
  infohash_v2: comparators.text,
  last_activity: comparators.invertedNumeric,
  magnet: comparators.text,
  name: comparators.textWithNumbers,
  num_leechs: comparators.numeric,
  num_seeds: comparators.numeric,
  priority: comparators.numeric,
  progress: comparators.numeric,
  ratio: comparators.numeric,
  ratio_limit: comparators.numeric,
  savePath: comparators.textWithNumbers,
  seeding_time: comparators.numeric,
  seeding_time_limit: comparators.numeric,
  seen_complete: comparators.numeric,
  seq_dl: comparators.boolean,
  size: comparators.numeric,
  state: comparators.numeric,
  super_seeding: comparators.boolean,
  tags: comparators.arrayText,
  time_active: comparators.numeric,
  total_size: comparators.numeric,
  tracker: comparators.text,
  trackerDomain: comparators.text,
  trackers_count: comparators.numeric,
  truncated_hash: comparators.text,
  up_limit: comparators.numeric,
  uploaded: comparators.numeric,
  uploaded_session: comparators.numeric,
  upspeed: comparators.numeric
}

export default comparatorMap