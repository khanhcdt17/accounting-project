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

  headers = [
    {
      key: 'thanh-lap',
      title: 'Dịch vụ thành lập',
      children: [
        { title: 'Thành lập công ty' },
        { title: 'Công ty TNHH' },
        { title: 'Công ty cổ phần' },
        { title: 'Công ty vốn nước ngoài' },
        { title: 'Chi nhánh công ty' },
        { title: 'Hộ kinh doanh cá thể' },
      ],
    },
    {
      key: '',
      title: 'Dịch vụ kế toán',
      children: [
        { title: 'Kế toán trọn gói' },
        { title: 'Kế toán nội bộ' },
        { title: 'Khai thuế ban đầu' },
        { title: 'Báo cáo tài chính' },
        { title: 'Quyết toán thuế cuối năm' },
        { title: 'Làm sổ sách kế toán' },
        { title: 'Hoàn thuế GTGT' },
        { title: 'Hoàn thuế TNCN' },
      ],
    },
    {
      key: '',
      title: 'Thay đổi GPKD',
      children: [
        { title: 'Thay đổi tên' },
        { title: 'Đổi địa chỉ' },
        { title: 'Thêm ngành nghề' },
        { title: 'Tăng vốn điều lệ' },
        { title: 'Thêm cổ đông' },
        { title: 'Đổi đại diện pháp luật' },
        { title: 'Đổi loại hình công ty' },
        { title: 'Cập nhật CCCD' },
      ],
    },
    {
      key: '',
      title: 'Dịch vụ khác',
      children: [
        { title: 'Hóa đơn điện tử' },
        { title: 'Bảo hiểm xã hội' },
        { title: 'Tạm ngừng kinh đoanh' },
        { title: 'Giải thể doanh nghiệp' },
        { title: 'Đăng ký kinh doanh' },
        { title: 'Chữ ký số' },
        { title: 'Đăng ký MST cá nhân' },
        { title: 'Soạn thảo hợp đồng' },
      ],
    },
  ];

  constructor(private commonStore: CommonStore, private route: Router) {}

  redirectToBlog(tabValue: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ tabValue });
    this.route.navigate(['tin-tuc']);
  }

  redirectToDetailService(selectedServiceId: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ selectedDetailServiceId: selectedServiceId });
    this.route.navigate([`dich-vu/${selectedServiceId}`]);
  }

  redirectTo(url: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.route.navigate([url]);
  }

  redirectToService(selectedServiceId: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ selectedServiceId });
    this.route.navigate(['dich-vu']);
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
