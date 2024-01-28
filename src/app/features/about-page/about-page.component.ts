import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;
  items = [
    {
      image: 'https://i.imgur.com/0A0Q1nm.png',
      name: 'Phạm Thị Thanh Đoan',
      position: 'Giám đốc',
      comment: `Bằng kinh nghiệm, nỗ lực trau dồi kiến thức, đổi mới công nghệ trong làm việc, 
      tôi mong muốn phát triển công ty có dịch vụ được sử dụng phổ biến nhất trong nước để giúp hàng nghìn Doanh nghiệp có giải pháp, 
      am hiểu về Luật thuế, Luật Doanh nghiệp để sử dụng, điều hành Doanh nghiệp mình ngày một lớn mạnh.`,
    },
    {
      image: 'https://i.imgur.com/hBbLumK.png',
      name: 'Nguyễn Thị Huệ',
      position: 'Trưởng phòng kế toán',
      comment: `Trải qua nhiều năm hoạt động trong lĩnh vực Kế Toán và Thuế.
      Những kinh nghiệm tích lũy từ việc làm việc với cả doanh nghiệp lớn và nhỏ đã giúp tôi hiểu rõ về các vấn đề liên quan đến Kế Toán và Thuế, 
      từ đó mang lại giải pháp đắc lực cho khách hàng của mình.`,
    },
  ];

  serviceItems = [
    {
      image: 'fa-solid fa-cash-register',
      name: 'Dịch vụ kế toán',
      comment: `Hỗ trợ doanh nghiệp về thủ tục thuế trong suốt quá trình thành lập và hoạt động, giúp doanh nghiệp yên tâm phát triển kinh doanh.`,
    },
    {
      image: 'fa-solid fa-scale-balanced',
      name: 'Đại lý thuế',
      comment: `2KT giúp bạn tiết kiệm thời gian và công sức, giảm rủi ro pháp lý, giảm chi phí, cập nhật thông tin thuế mới nhất và tư vấn chiến lược thuế.`,
    },
    {
      image: 'fa-solid fa-money-bill-trend-up',
      name: 'Quyết toán thuế',
      comment: `2KT sẽ cam kết đảm bảo tiến độ và chất lượng công việc, nhằm đáp ứng nhu cầu giải quyết vấn đề quyết toán thuế ở Doanh nghiệp.`,
    },
    {
      image: 'fa-solid fa-building',
      name: 'Đăng ký kinh doanh',
      comment: `Với dịch vụ đăng ký kinh doanh uy tín mà 2KT mang lại, việc startup công ty sẽ trở nên dễ dàng, hiệu quả, nhanh gọn lại còn tiết kiệm hơn.`,
    },
    {
      image: 'fa-solid fa-address-card',
      name: 'Bảo hiểm xã hội',
      comment: `Nếu bạn là công ty đang gặp vướng mắc về thủ tục đăng ký bảo hiểm xã hội, thì hãy để dịch vụ chuyên nghiệp, uy tín của 2KT hỗ trợ bạn.`,
    },
    {
      image: 'fa-solid fa-graduation-cap',
      name: 'Đào tạo kế toán',
      comment: `2KT sẵn sàng chia sẻ với cộng đồng, mang lại kiến thức thiết thực cho sinh viên, đào tạo cho đội ngũ kế toán của Doanh nghiệp, cá nhân có nhu cầu`,
    },
  ];
  itemsPerSlide = 4;
  isMobileMode = false;

  constructor(private route: Router) {}

  ngOnInit() {
    if (window.innerWidth <= 1550 && window.innerWidth > 1120) {
      this.itemsPerSlide = 3;
    } else if (window.innerWidth <= 1120) {
      this.itemsPerSlide = 1;
      this.isMobileMode = true;
    }
  }

  redirectAbout() {
    this.route.navigate(['lien-he']);
  }

  swipeRight() {
    this.carousel.nextSlide();
    console.log('swipeRight');
  }
  swipeLeft() {
    console.log('swipeLeft');
    this.carousel.previousSlide();
  }
}
