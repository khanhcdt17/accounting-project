import { Component } from '@angular/core';

@Component({
  selector: 'app-core-value',
  templateUrl: './core-value.component.html',
  styleUrls: ['./core-value.component.scss'],
})
export class CoreValueComponent {
  profiles = [
    {
      icon: 'fa-solid fa-circle-check',
      title: 'Tin cậy',
      content: `Các dịch vụ  mà dịch vụ thuê - kế toán 2KT mang lại cho khách hàng đều có độ tin cậy cao, 
      con người của dịch vụ thuê - kế toán 2KT với tri thức và văn hóa cao luôn mang lại cho khách hàng cảm giác tin cậy trong giao dịch.`,
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'Tận tình',
      content: `Dịch vụ thuê - kế toán 2KT Phát triển đội ngũ nhân viên, bộ phận kinh doanh, tư vấn và các bộ phận khác luôn luôn tận tâm, tận lực phục vụ vì lợi ích của khách hàng, 
        làm cho khách hàng tin cậy như một người bạn, một người đồng hành trong sự nghiệp.`,
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Uy tín',
      content: `Các dịch vụ của dịch vụ thuê - kế toán 2KT luôn đáp ứng được yêu cầu của khách hàng. Đội ngũ tư vấn luôn hỗ trợ khách hàng 24/7. 
        Chúng tôi cam kết có trách nhiệm đồng hành dài lâu cùng Doanh nghiệp trên từng chặng đường phát triển thành công, bền vững.`,
    },
  ];
}
