import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonStore } from '../../common/common.store';
import { DEFAULT_URL, TAB_CONTENT } from '../../common/constant.model';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;
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
  swipeRight() {
    this.carousel.nextSlide();
    console.log('swipeRight');
  }
  swipeLeft() {
    console.log('swipeLeft');
    this.carousel.previousSlide();
  }
}
