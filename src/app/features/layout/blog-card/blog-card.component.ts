import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  items = [
    {
      image1: 'https://i.imgur.com/fz6vPUq.jpg',
      title1: 'Dịch vụ kế toán trọn gói tốt nhất năm 2023 tại Việt Nam',
      image2: 'https://i.imgur.com/zuC1C4w.jpg',
      title2:
        'Nhân Viên Đại Lý Thuế Làm Gì? 3 Điều Bạn Cần Biết Về Vai Trò Quan Trọng Này',
    },
    {
      image1: 'https://i.imgur.com/xZeFzGg.jpg',
      title1:
        'Dịch Vụ Kế toán Trọn Gói Giá Rẻ Tại Việt Nam: Top 1 Lựa chọn cho doanh nghiệp',
      image2: 'https://i.imgur.com/kFNcTLb.jpg',
      title2:
        'Dịch Vụ Kế Toán – 7 Bước Quan Trọng để Tối Ưu Hóa Quy Trình Kế Toán',
    },
    {
      image1: 'https://i.imgur.com/pIK78mW.jpg',
      title1:
        'Một số hạn chế pháp lý về thành lập đại lý thuế quyết toán ở Việt Nam 2024',
      image2: 'https://i.imgur.com/84QeOrl.jpg',
      title2: 'Giải pháp thuế toàn diện khi dùng đại lý thuế tại Việt Nam',
    },
    {
      image1: 'https://i.imgur.com/4HpQH4e.jpg',
      title1:
        'Thành Lập Đại Lý Thuế Uy Tín Cần Điều Kiện, Thủ Tục Gì Năm 2024?',
      image2: 'https://i.imgur.com/Wh45eba.jpg',
      title2: '3 Lợi Ích Khi Hợp Tác Với Đại Lý Thuế',
    },
    {
      image1: 'https://i.imgur.com/nFGdG4v.jpg',
      title1: 'Chu trình kế toán: Giải thích và ứng dụng kế toán cơ bản',
      image2: 'https://i.imgur.com/vUWexqh.jpg',
      title2: 'Báo giá dịch vụ kế toán thuế',
    },
    {
      image1: 'https://i.imgur.com/Wh45eba.jpg',
      title1: '5 lợi ích của việc sử dụng phần mềm quản lý kế toán',
      image2: 'https://i.imgur.com/NfCVvmE.jpg',
      title2:
        'Thành Lập Đại Lý Thuế Uy Tín Cần Điều Kiện, Thủ Tục Gì Năm 2024?',
    },
  ];
}
