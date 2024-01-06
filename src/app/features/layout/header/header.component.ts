import { Component } from '@angular/core';
import { BlogStore } from '../../common/blog-page.store';
import { TAB_CONTENT } from '../../common/constant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  keyTab = TAB_CONTENT;

  constructor(private blogStore: BlogStore, private route: Router) {}

  redirectToBlog(tabValue: string) {
    this.blogStore.patchState({ tabValue });
    this.route.navigate(['tin-tuc']);
  }

  redirectTo(url: string) {
    this.route.navigate([url]);
  }
}
