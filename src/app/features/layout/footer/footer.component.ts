import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonStore } from '../../common/common.store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private commonStore: CommonStore, private route: Router) {}

  redirectTo(url: string) {
    this.commonStore.patchState({ selectedServiceId: 'dich-vu' });
    this.route.navigate([url]);
  }

  redirectToService(selectedServiceId: string) {
    this.commonStore.patchState({ selectedServiceId });
    this.route.navigate(['dich-vu']);
  }
}
