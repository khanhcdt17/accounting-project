export interface blogParam {
  tab: string;
  searchText: string;
}

export const LIST_TABS = [
  { value: '', title: 'Tất cả' },
  { value: '23449', title: 'Thuế - Kế toán' },
  { value: '7452946', title: 'Doanh nghiệp' },
  { value: '812108', title: 'Cá nhân' },
];

export interface BlogContent {
  id: number;
  content: Content;
  modified: string;
  title: Title;
  jetpack_featured_media_url: string;
  categories: number[];
}

export interface Content {
  protected: boolean;
  rendered: string;
}

export interface Title {
  rendered: string;
}
