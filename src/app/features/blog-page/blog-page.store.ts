import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BlogContentApiService } from '../api/blog-content-api.service';
import { combineLatest, filter, pipe, switchMap, tap } from 'rxjs';
import { BlogContent } from './blog-page.util';

const state = {
  tabValue: '',
  searchValue: '',
  contents: [] as BlogContent[],
  displayContents: [] as BlogContent[],
};

type State = typeof state;

@Injectable()
export class BlogStore extends ComponentStore<State> {
  constructor(private contentApi: BlogContentApiService) {
    super(state);
    this.loadAllContents('');
    this.filterContents(
      combineLatest([
        this.select((x) => x.contents),
        this.select((x) => x.searchValue),
        this.select((x) => x.tabValue),
      ])
    );
  }

  private loadAllContents = this.effect(
    pipe(
      switchMap(() => this.contentApi.getPosts()),
      tap((result) => {
        var contents = result as BlogContent[];
        this.patchState({ contents });
      })
    )
  );

  private filterContents = this.effect<[BlogContent[], string, string]>(
    pipe(
      filter(([contents, searchValue, tabVale]) => !!contents.length),
      tap(([contents, searchValue, tabVale]) => {
        console.log('contents', contents);
        var displayContents = contents.filter(
          (x) =>
            x.title.rendered
              .toLowerCase()
              .includes(searchValue.toLowerCase()) &&
            (tabVale === '' || x.categories.includes(Number(tabVale)))
        );
        console.log('displayContents', displayContents);
        this.patchState({ displayContents });
      })
    )
  );
}
