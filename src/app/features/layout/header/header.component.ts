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
        { title: 'Thành lập công ty', key: 'thanh-lap-cong-ty' },
        { title: 'Công ty TNHH', key: 'cong-ty-tnhh' },
        { title: 'Công ty cổ phần', key: 'cong-ty-co-phan' },
        { title: 'Công ty vốn nước ngoài', key: 'cong-ty-von-nuoc-ngoai' },
        { title: 'Chi nhánh công ty', key: 'chi-nhanh-cong-ty' },
        { title: 'Hộ kinh doanh cá thể', key: 'ho-kinh-doanh-ca-the' },
      ],
    },
    {
      key: 'ke-toan',
      title: 'Dịch vụ kế toán',
      children: [
        { title: 'Kế toán trọn gói', key: '' },
        { title: 'Kế toán nội bộ', key: '' },
        { title: 'Khai thuế ban đầu', key: '' },
        { title: 'Báo cáo tài chính', key: '' },
        { title: 'Quyết toán thuế cuối năm', key: '' },
        { title: 'Làm sổ sách kế toán', key: '' },
        { title: 'Hoàn thuế GTGT', key: '' },
        { title: 'Hoàn thuế TNCN', key: '' },
      ],
    },
    {
      key: 'thay-doi-gpkq',
      title: 'Thay đổi GPKD',
      children: [
        { title: 'Thay đổi tên', key: '' },
        { title: 'Đổi địa chỉ', key: '' },
        { title: 'Thêm ngành nghề', key: '' },
        { title: 'Tăng vốn điều lệ', key: '' },
        { title: 'Thêm cổ đông', key: '' },
        { title: 'Đổi đại diện pháp luật', key: '' },
        { title: 'Đổi loại hình công ty', key: '' },
        { title: 'Cập nhật CCCD', key: '' },
      ],
    },
    {
      key: 'dich-vu-khac',
      title: 'Dịch vụ khác',
      children: [
        { title: 'Hóa đơn điện tử', key: '' },
        { title: 'Bảo hiểm xã hội', key: '' },
        { title: 'Tạm ngừng kinh đoanh', key: '' },
        { title: 'Giải thể doanh nghiệp', key: '' },
        { title: 'Đăng ký kinh doanh', key: '' },
        { title: 'Chữ ký số', key: '' },
        { title: 'Đăng ký MST cá nhân', key: '' },
        { title: 'Soạn thảo hợp đồng', key: '' },
      ],
    },
  ];

  constructor(private commonStore: CommonStore, private route: Router) {}

  redirectToBlog(tabValue: string) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({ tabValue });
    this.route.navigate(['tin-tuc']);
  }

  redirectToDetailService(
    selectedServiceId: string,
    selectedDetailServiceId: string
  ) {
    this.isMenuOpen = !this.isMenuOpen;
    this.commonStore.patchState({
      selectedDetailServiceId: selectedDetailServiceId,
    });
    this.commonStore.patchState({ selectedServiceId: selectedServiceId });
    this.route.navigate([`dich-vu/${selectedDetailServiceId}`]);
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
