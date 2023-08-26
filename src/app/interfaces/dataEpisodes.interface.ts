// Generated by https://quicktype.io

export interface DataEpisodes {
  pagination: Pagination;
  data:       RecentEpisodes[];
}

export interface RecentEpisodes {
  entry:         Entry;
  episodes:      Entry[];
  region_locked: boolean;
}

export interface Entry {
  mal_id:   number;
  url:      string;
  images?:  { [key: string]: Image };
  title:    string;
  premium?: boolean;
}

export interface Image {
  image_url:       string;
  small_image_url: string;
  large_image_url: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page:     boolean;
}

