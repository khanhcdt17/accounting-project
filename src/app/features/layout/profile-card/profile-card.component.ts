import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() imgSrc = '';
  @Input() isHomePage = true;
  @Input() title = 'Dịch vụ thuê - kế toán 2KT';
  @Input() content1 = '';
  @Input() content2 = '';

  constructor(private route: Router) {}

  redirectTo(url: string) {
    this.route.navigate([url]);
  }
}
