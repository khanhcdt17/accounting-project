import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonStore } from '../../common/common.store';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss'],
})
export class ServiceContentComponent {
  content1 = `Dịch vụ kế toán đóng vai trò quan trọng trong quá trình hoạt động của doanh nghiệp. 
  Kế toán không chỉ là một phần của hệ thống tài chính mà còn là trụ cột quan trọng giúp doanh nghiệp đi đúng hướng và duy trì sự ổn định. 
  Nhận thức được điều này, 2KT đã triển khai và cung cấp các dịch vụ kế toán trọn gói đáp ứng đầy đủ nghiệp vụ với mức chi phí tối ưu, 
  mang đến giải pháp hoàn hảo cho mọi doanh nghiệp.`;

  content2 = `Với đội ngũ chuyên viên giàu kinh nghiệm, 2KT cam kết mang đến cho doanh nghiệp gói dịch vụ Kế Toán Thuế trọn gói chất lượng nhất. 
  Chúng tôi không chỉ đảm bảo tuân thủ quy định một cách chặt chẽ mà còn tối ưu hóa quy trình làm việc, giảm thiểu rủi ro, 
  giúp khách hàng giải quyết mọi vấn đề một cách triệt để và nhanh chóng nhất.`;
  constructor(
    private activeRoute: ActivatedRoute,
    private commonStore: CommonStore
  ) {}

  vm$ = this.commonStore.select((state) => {
    return {
      selectedService: state.selectedService,
    };
  });

  ngOnInit() {
    const selectedServiceId = this.activeRoute.snapshot.params['id'];
    this.commonStore.patchState({ selectedServiceId });
  }
}
