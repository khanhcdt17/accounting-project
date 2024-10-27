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
  thanhLapIsOpen = false;
  keToanIsOpen = false;
  thayDoiIsOpen = false;
  khacIsOpen = false;
  blogIsOpen = false;
  contactIsOpen = false;

  headers = [
    {
      key: 'thanh-lap',
      title: 'Dịch vụ thành lập',
      isOpen: false,
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
        { title: 'Kế toán trọn gói', key: 'ke-toan-tron-goi' },
        { title: 'Kế toán nội bộ', key: 'ke-toan-noi-bo' },
        { title: 'Khai thuế ban đầu', key: 'khai-thue-ban-dau' },
        { title: 'Báo cáo tài chính', key: 'bao-cao-tai-chinh' },
        { title: 'Quyết toán thuế cuối năm', key: 'quyet-toan-thue-cuoi-nam' },
        { title: 'Làm sổ sách kế toán', key: 'lam-so-sach-ke-toan' },
        { title: 'Hoàn thuế GTGT', key: 'hoan-thue-gtgt' },
        { title: 'Hoàn thuế TNCN', key: 'hoan-thue-tncn' },
      ],
    },
    {
      key: 'thay-doi-gpkd',
      isOpen: false,
      title: 'Thay đổi GPKD',
      children: [
        { title: 'Thay đổi tên', key: 'thay-doi-ten' },
        { title: 'Đổi địa chỉ', key: 'doi-dia-chi' },
        { title: 'Thêm ngành nghề', key: 'them-nganh-nghe' },
        { title: 'Tăng vốn điều lệ', key: 'tang-von-dieu-le' },
        { title: 'Thêm cổ đông', key: 'them-co-dong' },
        { title: 'Đổi đại diện pháp luật', key: 'doi-dai-dien-phap-luat' },
        { title: 'Đổi loại hình công ty', key: 'doi-loai-hinh-cong-ty' },
        { title: 'Cập nhật CCCD', key: 'cap-nhat-cccd' },
      ],
    },
    {
      key: 'dich-vu-khac',
      isOpen: false,
      title: 'Dịch vụ khác',
      children: [
        { title: 'Hóa đơn điện tử', key: 'hoa-don-dien-tu' },
        { title: 'Bảo hiểm xã hội', key: 'bao-hiem-xa-hoi' },
        { title: 'Tạm ngừng kinh doanh', key: 'tam-ngung-kinh-doanh' },
        { title: 'Giải thể doanh nghiệp', key: 'giai-the-doanh-nghiep' },
        { title: 'Đăng ký kinh doanh', key: 'dang-ky-kinh-doanh' },
        { title: 'Chữ ký số', key: 'chu-ky-so' },
        { title: 'Đăng ký MST cá nhân', key: 'dang-ky-mst-ca-nhan' },
        { title: 'Soạn thảo hợp đồng', key: 'soan-thao-hop-dong' },
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
      case 'blog':
        this.blogIsOpen = !this.blogIsOpen;
        break;
      case 'contact':
        this.contactIsOpen = !this.contactIsOpen;
        break;
    }
  }

  expendServiceMenu(service: string) {
    this.headers.forEach((x) => {
      if (x.key === service) x.isOpen = !x.isOpen;
    });
  }
}
