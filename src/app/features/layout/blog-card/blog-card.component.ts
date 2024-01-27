import { Component, OnInit } from '@angular/core';
import { CommonStore } from '../../common/common.store';
import { DEFAULT_URL, TAB_CONTENT } from '../../common/constant.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  defaultUrl = DEFAULT_URL;
  constructor(private commonStore: CommonStore) {}
  chuck = 2;
  itemsPerSlide = 3;
  vm$ = this.commonStore.select((state) => {
    return {
      displayContents: state.displayContents,
    };
  });
  ngOnInit() {
    if (window.innerWidth <= 1550 && window.innerWidth > 1120) {
      this.itemsPerSlide = 2;
    } else if (window.innerWidth <= 1120) {
      this.itemsPerSlide = 1;
      this.chuck = 1;
    }
  }
}
