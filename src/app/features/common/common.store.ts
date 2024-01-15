import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BlogContentApiService } from '../api/blog-content-api.service';
import { combineLatest, filter, pipe, switchMap, tap } from 'rxjs';
import { BlogContent } from '../blog-page/blog-page.util';
import {
  CATE_ID,
  TAB_CONTENT,
  serviceModel,
  ListServices,
} from './constant.model';

const state = {
  tabValue: '',
  searchValue: '',
  contents: [] as BlogContent[],
  displayContents: [] as BlogContent[],
  selectedContent: null as unknown as BlogContent,
  relatedContent: [] as BlogContent[],
  selectedId: 0,
  selectedServiceId: '',
  selectedService: null as unknown as serviceModel,
};

type State = typeof state;

@Injectable({
  providedIn: 'root',
})
export class CommonStore extends ComponentStore<State> {
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
    this.loadSelectedContent(
      combineLatest([
        this.select((x) => x.contents),
        this.select((x) => x.selectedId),
      ])
    );
    this.loadRelatedContent(
      combineLatest([
        this.select((x) => x.contents),
        this.select((x) => x.selectedContent),
      ])
    );
    this.loadServiceContent(this.select((x) => x.selectedServiceId));
  }

  get snapshotContents(): BlogContent[] {
    return this.get((x) => x.contents);
  }

  get snapshotSelectedContent(): BlogContent {
    return this.get((x) => x.selectedContent);
  }

  private loadAllContents = this.effect(
    pipe(
      switchMap(() => this.contentApi.getPosts()),
      tap((result) => {
        var contents = result.map((x) => {
          return {
            id: x.id,
            content: {
              protected: x.content.protected,
              rendered: x.content.rendered
                .replace(/<em>/g, '')
                .replace(/<\/em>/g, ''),
            },
            modified: x.modified,
            title: {
              rendered: x.title.rendered.replace('&nbsp;', ' '),
            },
            jetpack_featured_media_url: x.jetpack_featured_media_url,
            tabs: this.getTabs(x.categories),
          };
        });
        this.patchState({ contents });
      })
    )
  );

  private loadSelectedContent = this.effect<[BlogContent[], number]>(
    pipe(
      tap(([contents, selectedId]) => {
        const selectedContent = contents.find((x) => x.id == selectedId);
        this.patchState({ selectedContent });
      })
    )
  );

  private loadRelatedContent = this.effect<[BlogContent[], BlogContent]>(
    pipe(
      filter(
        ([contents, selectedContent]) =>
          !!contents?.length && !!selectedContent?.title.rendered
      ),
      tap(([contents, selectedContent]) => {
        const inputWords = selectedContent.title.rendered
          .toLowerCase()
          .split(/\s+/);
        var relatedContent = contents.filter(
          (x) =>
            x.title.rendered
              .toLowerCase()
              .split(/\s+/)
              .filter((t) => inputWords.includes(t)).length > 4
        );
        this.patchState({ relatedContent });
      })
    )
  );

  private filterContents = this.effect<[BlogContent[], string, string]>(
    pipe(
      filter(([contents, searchValue, tabVale]) => !!contents.length),
      tap(([contents, searchValue, tabVale]) => {
        var displayContents = contents.filter(
          (x) =>
            x.title.rendered
              .toLowerCase()
              .includes(searchValue.toLowerCase()) &&
            (tabVale === '' || x.tabs.includes(tabVale))
        );
        this.patchState({ displayContents });
      })
    )
  );

  private loadServiceContent = this.effect<string>(
    pipe(
      tap((serviceContent) => {
        const selectedService = ListServices.find(
          (x) => x.key === serviceContent
        );
        this.patchState({ selectedService });
      })
    )
  );

  private getCate(cateId: number) {
    switch (cateId) {
      case CATE_ID.TAX:
        return TAB_CONTENT.TAX;
      case CATE_ID.PERSONAL:
        return TAB_CONTENT.PERSONAL;
      case CATE_ID.COMPANY:
        return TAB_CONTENT.COMPANY;
      default:
        return '';
    }
  }

  private getTabs(categories: number[] | undefined) {
    if (!categories || (categories.length && categories[0] == 1)) {
      return [TAB_CONTENT.TAX, TAB_CONTENT.PERSONAL, TAB_CONTENT.COMPANY];
    } else {
      return categories.map((x) => this.getCate(x));
    }
  }
}
