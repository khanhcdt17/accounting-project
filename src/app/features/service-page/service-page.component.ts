import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePageComponent {
  services = [
    {
      img: 'https://i.imgur.com/SIgFzGt.jpg',
      label: 'Kế toán',
      nav: 'ke-toan',
    },
    {
      img: 'https://i.imgur.com/kFNcTLb.jpg',
      label: 'Đại lý thuế',
      nav: 'dai-ly-thue',
    },
    {
      img: 'https://i.imgur.com/jcCVM7S.jpg',
      label: 'Quyết toán thuế',
      nav: 'quyet-toan-thue',
    },
    {
      img: 'https://i.imgur.com/fz6vPUq.jpg',
      label: 'Đăng ký kinh doanh',
      nav: 'dang-ky-kinh-doanh',
    },
    {
      img: 'https://i.imgur.com/3abWgNu.jpg',
      label: 'Bảo hiểm xã hội',
      nav: 'bao-hiem-xa-hoi',
    },
    {
      img: 'https://i.imgur.com/P0V4AUm.jpg',
      label: 'Đào tạo kế toán',
      nav: 'dao-tao-ke-toan',
    },
  ];

  constructor(private route: Router) {}

  redirectToContent(nav: string) {
    this.route.navigate([`dich-vu/${nav}`]);
  }
}
