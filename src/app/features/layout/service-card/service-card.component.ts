import { Component } from '@angular/core';
import { CommonStore } from '../../common/common.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  hoveredItem = '';
  constructor(private commonStore: CommonStore, private route: Router) {}

  onHover(hover: string): void {
    this.hoveredItem = hover;
  }
  listContent = [
    {
      id: 'ke-toan',
      title1: 'Dịch vụ',
      title2: 'Kế toán',
      content:
        '2KT cung cấp dịch vụ kế toán nhằm hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '01',
    },
    {
      id: 'dai-ly-thue',
      title1: 'Đại lý',
      title2: 'thuế',
      content:
        '2KT cung cấp dịch vụ thuế nhằm hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '02',
    },
    {
      id: 'quyet-toan-thue',
      title1: 'Quyết toán',
      title2: 'thuế',
      content:
        '2KT cung cấp dịch vụ quyết toán thuế nhằm hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '03',
    },
    {
      id: 'dang-ky-kinh-doanh',
      title1: 'Đăng ký',
      title2: 'kinh doanh',
      content:
        '2KT cung cấp dịch vụ hỗ trợ đăng ký kinh doanh nhằm hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '04',
    },
    {
      id: 'bao-hiem-xa-hoi',
      title1: 'Bảo hiểm',
      title2: 'xã hội',
      content:
        '2KT cung cấp dịch vụ hỗ trợ bảo hiểm xã hội nhằm hỗ trợ cá nhân, doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '05',
    },
    {
      id: 'dao-tao-ke-toan',
      title1: 'Đào tạo',
      title2: 'kế toán',
      content:
        '2KT cung cấp dịch vụ đào tạo kế toán doanh nghiệp nhằm hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.',
      index: '06',
    },
  ];
  redirectToService(selectedServiceId: string) {
    this.commonStore.patchState({ selectedServiceId });
    this.route.navigate([`dich-vu/${selectedServiceId}`]);
  }
}
