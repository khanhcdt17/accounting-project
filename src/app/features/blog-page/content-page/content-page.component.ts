import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonStore } from '../../common/common.store';
import { ActivatedRoute, Router } from '@angular/router';
import { CATE_ID, DEFAULT_URL, TAB_CONTENT } from '../../common/constant.model';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentPageComponent {
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  defaultUrl = DEFAULT_URL;

  constructor(
    private commonStore: CommonStore,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  vm$ = this.commonStore.select((state) => {
    return {
      selectedContent: state.selectedContent,
      relatedContent: state.relatedContent,
    };
  });

  ngOnInit() {
    const selectedId = this.activeRoute.snapshot.params['id'];
    this.commonStore.patchState({ selectedId });
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
    this.commonStore.patchState({ tabValue });
    this.router.navigate(['tin-tuc']);
  }
}
