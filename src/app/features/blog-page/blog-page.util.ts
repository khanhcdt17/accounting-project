import { TAB_CONTENT } from '../common/constant.model';

export interface blogParam {
  tab: string;
  searchText: string;
}

export const LIST_TABS = [
  { value: '', title: 'Tất cả' },
  { value: TAB_CONTENT.TAX, title: 'Thuế - Kế toán' },
  { value: TAB_CONTENT.COMPANY, title: 'Doanh nghiệp' },
  { value: TAB_CONTENT.PERSONAL, title: 'Cá nhân' },
];

export interface BlogContent {
  id: number;
  content: Content;
  modified: string;
  title: Title;
  jetpack_featured_media_url: string;
  categories?: number[];
  tabs: string[];
}

export interface Content {
  protected: boolean;
  rendered: string;
}

export interface Title {
  rendered: string;
}
