import { Component } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePageComponent {
  services = [
    { img: '', label: 'Kế toán' },
    { img: '', label: 'Đại lý thuế' },
    { img: '', label: 'Quyết toán thuế' },
    { img: '', label: 'Đăng ký kinh doanh' },
    { img: '', label: 'Bảo hiểm xã hội' },
    { img: '', label: 'Đào tạo kế toán' },
  ];
}
