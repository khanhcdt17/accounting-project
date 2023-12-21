import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  profiles = [
    {
      index: 0,
      title: '2KT bao gồm những dịch vụ gì?',
      contents: [
        `Đại lý Thuế 2KT cung cấp dịch vụ kế toán, báo cáo thuế trọn gói, dịch vụ Đăng ký Kinh doanh, Quyết toán thuế, Đăng ký Lao động, Bảo hiểm xã hội.`,
      ],
      isOpen: false,
    },
    {
      index: 1,
      title: 'Doanh nghiệp cần chuẩn bị những gì?',
      contents: [
        `Đăng ký dịch vụ Thành lập công ty Quý khách chỉ cần chuẩn bị trước 3 bản sao y bản chính (công chứng) mới nhất (thời hạn công chứng không quá 3 tháng trở lại).`,
        `Đối với Dịch vụ kế toán, báo cáo Thuế 2KT, Quý khách cung cấp bản chụp bản scan Giấy phép kinh doanh/ MSDN và thông tin liên hệ, 2KT sẽ liên hệ tư vấn sớm nhất.`,
      ],
      isOpen: false,
    },
    {
      index: 2,
      title: 'Có phát sinh thêm chi phí hay không?',
      contents: [
        `Đại lý Thuế 2KT cam kết không phát sinh thêm các khoản chi phí khác, ngoài các khoảng phí, là phí mà chúng tôi đã thông báo cho bạn bằng văn bản.`,
      ],
      isOpen: false,
    },
    {
      index: 3,
      title: 'Dữ liệu thanh toán có bảo mật không?',
      contents: [
        `Hoàn toàn bảo mật. Đại lý Thuế 2KT cam kết không chia sẻ dữ liệu khách hàng cho bất kỳ bên thứ 3 nào trừ những báo cáo gửi cho cơ quan Thuế. 
      Điều khoản bảo mật là điểm nổi bật của Đại lý Thuế 2KT - Dịch vụ kế toán báo cáo Thuế chuyên nghiệp`,
      ],
      isOpen: false,
    },
    {
      index: 4,
      title: 'Quy trình làm việc tại 2KT như thế nào?',
      contents: [
        'B1: Tư vấn',
        'B2: Kí hợp đồng',
        'B3: Thanh toán',
        'B4: Tiếp nhận các giấy tờ, dữ liệu của khách hàng',
        'B5: Xử lý dữ liệu',
        'B6: Tập hợp gửi báo cáo cho khách hàng',
        'B7: Khách hàng phản hồi',
        'B8: Xử lý các phát sinh (nếu có)',
        'B9: Làm việc với các cơ quan pháp lý, Thuế.',
        'B10: Bàn giao',
      ],
      isOpen: false,
    },
  ];

  openTab(index: number): void {
    this.profiles.forEach((x) => x.index !== index && (x.isOpen = false));
    this.profiles[index].isOpen = !this.profiles[index].isOpen;
  }
}
