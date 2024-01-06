import { Component } from '@angular/core';
import { BlogStore } from '../common/blog-page.store';
import { LIST_TABS } from './blog-page.util';
import { Subject, debounceTime, distinctUntilChanged, pipe } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DEFAULT_URL } from '../common/constant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent {
  defaultUrl = DEFAULT_URL;
  private inputSubject = new Subject<string>();
  listTabs = LIST_TABS;

  constructor(
    private blogStore: BlogStore,
    public sanitizer: DomSanitizer,
    private route: Router
  ) {
    this.inputSubject
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        this.blogStore.patchState({
          searchValue: value,
        });
      });
  }

  vm$ = this.blogStore.select((state) => {
    return {
      tabValue: state.tabValue,
      displayContents: state.displayContents,
    };
  });

  tabClick(tabValue: string) {
    console.log('tabValue :>> ', tabValue);
    this.blogStore.patchState({ tabValue });
  }

  searchInput(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.inputSubject.next(inputValue);
  }

  redirectToPost(selectedId: number) {
    this.blogStore.patchState({ selectedId });
    this.route.navigate([`tin-tuc/bai-viet/${selectedId}`]);
  }
}
