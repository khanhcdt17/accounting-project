import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonStore } from '../common/common.store';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePageComponent {
  vm$ = this.commonStore.select((state) => {
    return {
      selectedService: state.selectedService,
    };
  });
  // services = [
  //   {
  //     id: 'thanh-lap',
  //     label: 'Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ - 250.000đ',
  //     description:
  //       'Hơn 17 năm kinh nghiệm cung cấp dịch vụ thành lập công ty, tư vấn thành lập doanh nghiệp trên 63 tỉnh, thành phố cả nước. Hơn ai hết chúng tôi hiểu Quý doanh nghiệp cần sự rõ ràng và tiết kiệm nhất về chi phí. Vì vậy, 2KT liệt kê chi tiết và đầy đủ các khoản phí mà bạn cần phải trả cho việc đăng ký thành lập công ty.',
  //     content: [
  //       {
  //         img: 'https://i.imgur.com/SIgFzGt.jpg',
  //         label: 'Thành lập công ty',
  //         nav: 'thanh-lap-cong-ty',
  //       },
  //       {
  //         img: 'https://i.imgur.com/kFNcTLb.jpg',
  //         label: 'Công ty TNHH',
  //         nav: 'cong-ty-tnhh',
  //       },
  //       {
  //         img: 'https://i.imgur.com/jcCVM7S.jpg',
  //         label: 'Công ty cổ phần',
  //         nav: 'cong-ty-co-phan',
  //       },
  //       {
  //         img: 'https://i.imgur.com/fz6vPUq.jpg',
  //         label: 'Công ty vốn nước ngoài',
  //         nav: 'cong-ty-von-nuoc-ngoai',
  //       },
  //       {
  //         img: 'https://i.imgur.com/3abWgNu.jpg',
  //         label: 'Chi nhánh công ty',
  //         nav: 'chi-nhanh-cong-ty',
  //       },
  //       {
  //         img: 'https://i.imgur.com/P0V4AUm.jpg',
  //         label: 'Hộ kinh doanh cá thể',
  //         nav: 'ho-kinh-doanh-ca-the',
  //       },
  //     ],
  //   },
  //   {
  //     id: '',
  //     label: 'Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ - 250.000đ',
  //     description:
  //       'Hơn 17 năm kinh nghiệm cung cấp dịch vụ thành lập công ty, tư vấn thành lập doanh nghiệp trên 63 tỉnh, thành phố cả nước. Hơn ai hết chúng tôi hiểu Quý doanh nghiệp cần sự rõ ràng và tiết kiệm nhất về chi phí. Vì vậy, 2KT liệt kê chi tiết và đầy đủ các khoản phí mà bạn cần phải trả cho việc đăng ký thành lập công ty.',
  //     content: [
  //       {
  //         img: 'https://i.imgur.com/SIgFzGt.jpg',
  //         label: 'Kế toán',
  //         nav: 'ke-toan',
  //       },
  //       {
  //         img: 'https://i.imgur.com/kFNcTLb.jpg',
  //         label: 'Đại lý thuế',
  //         nav: 'dai-ly-thue',
  //       },
  //       {
  //         img: 'https://i.imgur.com/jcCVM7S.jpg',
  //         label: 'Quyết toán thuế',
  //         nav: 'quyet-toan-thue',
  //       },
  //       {
  //         img: 'https://i.imgur.com/fz6vPUq.jpg',
  //         label: 'Đăng ký kinh doanh',
  //         nav: 'dang-ky-kinh-doanh',
  //       },
  //       {
  //         img: 'https://i.imgur.com/3abWgNu.jpg',
  //         label: 'Bảo hiểm xã hội',
  //         nav: 'bao-hiem-xa-hoi',
  //       },
  //       {
  //         img: 'https://i.imgur.com/P0V4AUm.jpg',
  //         label: 'Đào tạo kế toán',
  //         nav: 'dao-tao-ke-toan',
  //       },
  //     ],
  //   },
  // ];

  constructor(private route: Router, private commonStore: CommonStore) {}

  ngOnInit() {
    if (!this.commonStore.snapshotSelectedService)
      this.commonStore.patchState({ selectedServiceId: 'dich-vu' });
  }

  redirectToContent(nav: string, key: string) {
    if (key !== 'dich-vu') {
      this.commonStore.patchState({ selectedDetailServiceId: nav });
      this.route.navigate([`dich-vu/${nav}`]);
    } else {
      this.commonStore.patchState({ selectedServiceId: nav });
    }
  }
}
