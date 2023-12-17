import { Component } from '@angular/core';

@Component({
  selector: 'app-core-value',
  templateUrl: './core-value.component.html',
  styleUrls: ['./core-value.component.scss']
})
export class CoreValueComponent {
  profiles = [
    { icon: 'fa-solid fa-circle-check', title: 'Trung thực', content: 'Trung Thực trong mọi dịch vụ là cam kết. Chúng tôi hiểu giá trị của con số chính xác và tận tâm với số liệu. Đồng hành cùng bạn, chúng tôi tạo lập sự tin cậy và ổn định trong tài chính doanh nghiệp.' },
    { icon: 'fa-solid fa-heart', title: 'Tận tâm', content: 'Không chỉ là chuyên gia kế toán và thuế, mà còn tận tâm với mục tiêu và sứ mệnh của doanh nghiệp bạn. Cam kết đồng hành một cách tận tâm, mang lại dịch vụ chất lượng và giải pháp tài chính độc đáo cho sự thành công của khách hàng.' },
    { icon: 'fa-solid fa-lightbulb', title: 'Đổi mới', content: 'Không ngừng đổi mới, luôn phát triển bản thân.Cam kết mang lại giải pháp tài chính độc đáo, giúp doanh nghiệp trở nên linh hoạt và hiệu quả hơn.' }
  ]
}