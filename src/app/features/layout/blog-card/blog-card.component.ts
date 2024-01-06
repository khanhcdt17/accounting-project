import { Component } from '@angular/core';
import { BlogStore } from '../../common/blog-page.store';
import { DEFAULT_URL, TAB_CONTENT } from '../../common/constant.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  defaultUrl = DEFAULT_URL;
  constructor(private blogStore: BlogStore) {}

  vm$ = this.blogStore.select((state) => {
    return {
      displayContents: state.displayContents,
    };
  });
}
