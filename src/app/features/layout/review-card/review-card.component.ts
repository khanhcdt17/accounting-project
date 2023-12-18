import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  items = [
    {
      image: '',
      name: 'Ronne Galle',
      position: 'CEO',
      comment: `Công ty cung cấp các dịch vụ thuế chất lượng cao, giá cả hợp lý và 
      thời gian hoàn thành nhanh chóng. Tôi rất hài lòng với dịch vụ.`,
    },
    {
      image: '',
      name: 'Ronne Galle 2',
      position: 'CEO',
      comment: `Dịch vụ chuyên nghiệp và chất lượng. Đội ngũ tư vấn nhiệt tình, hiểu rõ về nhu cầu của khách hàng. 
        Chúng tôi đã có những trải nghiệm cực kỳ hài lòng với dịch vụ của công ty.`,
    },
    {
      image: '',
      name: 'Ronne Galle 3',
      position: 'Founder',
      comment: `Công ty cung cấp dịch vụ chất lượng và đẳng cấp. Chúng tôi đã tìm thấy sự chuyên nghiệp và 
        kiến thức sâu rộng từ đội ngũ nhân viên. Đây là đối tác lý tưởng cho khách hàng.`,
    },
    {
      image: '',
      name: 'Ronne Galle 4',
      position: 'CEO',
      comment: `Tôi đã hợp tác với công ty trong nhiều dự án và luôn ấn tượng bởi sự chuyên nghiệp và tận tâm của họ. 
      Chất lượng nội dung luôn đáp ứng cao nhất, và đội ngũ nhân viên có kiến thức sâu rộng về lĩnh vực thuế.`,
    },
    {
      image: '',
      name: 'Ronne Galle 5',
      position: 'CEO',
      comment: `Công ty mang lại giá trị chất lượng và sự uy tín. Đội ngũ nhân viên có khả năng hiểu rõ về nhu cầu và 
        đưa ra tối ưu cho khách hàng. Tôi tin tưởng và rất hài lòng với kết quả mỗi lần hợp tác.`,
    },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initCarousel();
  }

  private initCarousel(): void {
    const items = this.carousel.nativeElement.querySelectorAll('.slide');
    const minPerSlide = 4;

    let next = items[0] as HTMLElement;
    for (let i = 1; i < minPerSlide; i++) {
      const cloneChild = next.cloneNode(true) as HTMLElement;
      this.renderer.appendChild(this.carousel.nativeElement, cloneChild);
    }
  }
}
