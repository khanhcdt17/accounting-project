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
      id: 'thanh-lap',
      title1: 'Dịch vụ',
      title2: 'Thành lập',
      content:
        'Dịch vụ thuê - kế toán 2KT cung cấp dịch vụ thành lập doanh nghiệp uy tín, với đội ngũ giàu kinh nghiệm, hỗ trợ mọi thủ tục pháp lý cho các loại hình doanh nghiệp như Công ty TNHH, Công ty Cổ phần, Công ty vốn nước ngoài, Chi nhánh và Hộ kinh doanh cá thể. Cam kết chi phí hợp lý, minh bạch, giúp khách hàng an tâm khởi nghiệp và phát triển.',
      index: '01',
    },
    {
      id: 'ke-toan',
      title1: 'Dịch vụ',
      title2: 'Kế toán',
      content:
        'Dịch vụ thuê - kế toán 2KT cung cấp dịch vụ kế toán trọn gói uy tín và chuyên nghiệp với chi phí hợp lý, hỗ trợ doanh nghiệp mọi thủ tục thuế và kế toán. Dịch vụ của chúng tôi bao gồm Kế toán trọn gói, Kế toán nội bộ, Khai thuế ban đầu, Báo cáo tài chính, Quyết toán thuế cuối năm, Làm sổ sách kế toán, Hoàn thuế GTGT và Hoàn thuế TNCN, giúp doanh nghiệp an tâm tập trung phát triển kinh doanh.',
      index: '02',
    },
    {
      id: 'thay-doi-gpkd',
      title1: 'Dịch vụ',
      title2: 'Thay đổi GPKD',
      content:
        'Dịch vụ thuê - kế toán 2KT cung cấp dịch vụ thay đổi giấy phép kinh doanh chuyên nghiệp và nhanh chóng với chi phí hợp lý, đáp ứng mọi nhu cầu điều chỉnh giấy phép cho doanh nghiệp. Chúng tôi hỗ trợ các thủ tục như thay đổi tên, đổi địa chỉ, thêm ngành nghề, tăng vốn điều lệ, thêm cổ đông, đổi đại diện pháp luật, đổi loại hình công ty và cập nhật CCCD, đảm bảo quá trình thay đổi giấy phép diễn ra thuận lợi và đúng quy định.',
      index: '03',
    },
    {
      id: 'dich-vu-khac',
      title1: 'Dịch vụ khác',
      title2: '',
      content:
        'Dịch vụ thuê - kế toán 2KT cung cấp các dịch vụ khác hỗ trợ toàn diện cho doanh nghiệp, bao gồm hóa đơn điện tử, bảo hiểm xã hội, tạm ngừng kinh doanh, giải thể doanh nghiệp, đăng ký kinh doanh, chữ ký số, đăng ký mã số thuế cá nhân và soạn thảo hợp đồng. Với uy tín và chi phí hợp lý, 2KT cam kết giúp doanh nghiệp dễ dàng xử lý các thủ tục pháp lý, tập trung vào phát triển kinh doanh.',
      index: '04',
    },
  ];
  redirectToService(selectedServiceId: string) {
    this.commonStore.patchState({ selectedServiceId });
    this.route.navigate(['dich-vu']);
  }
}
