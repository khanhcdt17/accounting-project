import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @ViewChild(CarouselComponent) carousel!: CarouselComponent;
  items = [
    {
      image: 'https://i.imgur.com/wGoNqk3.jpg',
      name: 'Đặng Văn Hùng',
      position: 'CEO công ty HPTeck',
      comment: `Công ty Dịch vụ thuê - kế toán 2KT cung cấp các dịch vụ thuế chất lượng cao, giá cả hợp lý và 
      thời gian hoàn thành nhanh chóng. Tôi rất hài lòng với dịch vụ.`,
    },
    {
      image: 'https://i.imgur.com/ChIHpy6.jpg',
      name: 'Hồ Thu Thảo',
      position: 'CEO công ty TNHH Asnet',
      comment: `Dịch vụ chuyên nghiệp và chất lượng. Đội ngũ tư vấn nhiệt tình, hiểu rõ về nhu cầu của khách hàng. 
        Chúng tôi đã có những trải nghiệm cực kỳ hài lòng với dịch vụ của công ty Dịch vụ thuê - kế toán 2KT.`,
    },
    {
      image: 'https://i.imgur.com/TA72NnW.jpg',
      name: 'Nguyễn Hoàng Thông',
      position: 'Founder công ty GreenDay',
      comment: `Công ty Dịch vụ thuê - kế toán 2KT cung cấp dịch vụ chất lượng và đẳng cấp. Chúng tôi đã tìm thấy sự chuyên nghiệp và 
        kiến thức sâu rộng từ đội ngũ nhân viên. Đây là đối tác lý tưởng cho khách hàng.`,
    },
    {
      image: 'https://i.imgur.com/JNZZ3bA.jpg',
      name: 'Lê Diệu Nhi',
      position: 'CEO công ty TNHH T-Tech',
      comment: `Tôi đã hợp tác với công ty Dịch vụ thuê - kế toán 2KT trong nhiều dự án và luôn ấn tượng bởi sự chuyên nghiệp và tận tâm của họ. 
      Chất lượng và đội ngũ nhân viên có kiến thức sâu rộng về lĩnh vực thuế.`,
    },
    {
      image: 'https://i.imgur.com/n2ssjFH.jpg',
      name: 'Trần Hà',
      position: 'CEO công ty TNHH JSC',
      comment: `Công ty Dịch vụ thuê - kế toán 2KT mang lại giá trị chất lượng và sự uy tín. Đội ngũ nhân viên có khả năng hiểu rõ về nhu cầu và 
        đưa ra tối ưu cho khách hàng.`,
    },
  ];

  itemsPerSlide = 3;
  constructor() {}

  ngAfterContentInit(): void {
    if (window.innerWidth <= 1550 && window.innerWidth > 1120) {
      this.itemsPerSlide = 2;
    } else if (window.innerWidth <= 1120) {
      this.itemsPerSlide = 1;
    }
  }
}
