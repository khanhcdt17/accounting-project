import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BlogStore } from '../blog-page.store';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent {
  constructor(private blogStore: BlogStore, public sanitizer: DomSanitizer) {}

  vm$ = this.blogStore.select((state) => {
    return {
      selectedContent: state.selectedContent,
    };
  });

  getSourceUrl(sourceHtml: string): SafeResourceUrl {
    const blob = new Blob(['\uFEFF' + sourceHtml], { type: 'text/html' });
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }
}
