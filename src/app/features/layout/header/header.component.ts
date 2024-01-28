import { Component } from '@angular/core';
import { CommonStore } from '../../common/common.store';
import { TAB_CONTENT } from '../../common/constant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  keyTab = TAB_CONTENT;
  isMenuOpen = false;
  serviceIsOpen = false;
  blogIsOpen = false;
  contactIsOpen = false;

  constructor(private commonStore: CommonStore, private route: Router) {}

  redirectToBlog(tabValue: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ tabValue });
    this.route.navigate(['tin-tuc']);
  }

  redirectToService(selectedServiceId: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ selectedServiceId });
    this.route.navigate([`dich-vu/${selectedServiceId}`]);
  }

  redirectTo(url: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.route.navigate([url]);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  expendMenu(menu: string) {
    switch (menu) {
      case 'service':
        this.serviceIsOpen = !this.serviceIsOpen;
        break;
      case 'blog':
        this.blogIsOpen = !this.blogIsOpen;
        break;
      case 'contact':
        this.contactIsOpen = !this.contactIsOpen;
        break;
    }
  }
}
