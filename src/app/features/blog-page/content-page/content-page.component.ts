import { Component, ViewEncapsulation } from '@angular/core';
import { BlogStore } from '../../common/blog-page.store';
import { ActivatedRoute, Router } from '@angular/router';
import { CATE_ID, DEFAULT_URL, TAB_CONTENT } from '../../common/constant.model';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentPageComponent {
  defaultUrl = DEFAULT_URL;

  constructor(
    private blogStore: BlogStore,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  vm$ = this.blogStore.select((state) => {
    return {
      selectedContent: state.selectedContent,
      relatedContent: state.relatedContent,
    };
  });

  ngOnInit() {
    const selectedId = this.activeRoute.snapshot.params['id'];
    this.blogStore.patchState({ selectedId });
  }
  replaceText(text: string) {
    return text.replace('', '');
  }

  calculateDays(dateTime: string) {
    if (dateTime) {
      const selectedDateTime = new Date(dateTime).getTime();
      const currentDate = new Date().getTime();
      const timeDifference = currentDate - selectedDateTime;
      return Math.floor(timeDifference / (1000 * 3600 * 24));
    } else {
      return null;
    }
  }

  getTab(tabId: string) {
    switch (tabId) {
      case TAB_CONTENT.TAX:
        return 'Thuế - Kế toán';
      case TAB_CONTENT.PERSONAL:
        return 'Cá nhân';
      case TAB_CONTENT.COMPANY:
        return 'Doanh nghiệp';
      default:
        return '';
    }
  }
  tabClick(tabValue: string) {
    this.blogStore.patchState({ tabValue });
    this.router.navigate(['tin-tuc']);
  }
}
