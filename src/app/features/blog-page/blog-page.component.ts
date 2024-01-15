import { Component } from '@angular/core';
import { CommonStore } from '../common/common.store';
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
    private commonStore: CommonStore,
    public sanitizer: DomSanitizer,
    private route: Router
  ) {
    this.inputSubject
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        this.commonStore.patchState({
          searchValue: value,
        });
      });
  }

  vm$ = this.commonStore.select((state) => {
    return {
      tabValue: state.tabValue,
      displayContents: state.displayContents,
    };
  });

  tabClick(tabValue: string) {
    console.log('tabValue :>> ', tabValue);
    this.commonStore.patchState({ tabValue });
  }

  searchInput(event: Event) {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.inputSubject.next(inputValue);
  }

  redirectToPost(selectedId: number) {
    this.commonStore.patchState({ selectedId });
    this.route.navigate([`tin-tuc/bai-viet/${selectedId}`]);
  }
}
