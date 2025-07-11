import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonStore } from '../../common/common.store';
import { ListServices, ServiceModel } from '../../common/constant.model';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServiceContentComponent {
  introductionContents = [
    {
      id: 'thanh-lap',
      content1: `Dịch vụ kế toán đóng vai trò quan trọng trong quá trình hoạt động của doanh nghiệp. 
    Kế toán không chỉ là một phần của hệ thống tài chính mà còn là trụ cột quan trọng giúp doanh nghiệp đi đúng hướng và duy trì sự ổn định. 
    Nhận thức được điều này,dịch vụ thuê - kế toán 2KT đã triển khai và cung cấp các dịch vụ kế toán trọn gói đáp ứng đầy đủ nghiệp vụ với mức chi phí tối ưu, 
    mang đến giải pháp hoàn hảo cho mọi doanh nghiệp.`,
      content2: `Với đội ngũ chuyên viên giàu kinh nghiệm, dịch vụ thuê - kế toán 2KT cam kết mang đến cho doanh nghiệp gói dịch vụ Kế Toán Thuế trọn gói chất lượng nhất. 
    Chúng tôi không chỉ đảm bảo tuân thủ quy định một cách chặt chẽ mà còn tối ưu hóa quy trình làm việc, giảm thiểu rủi ro, 
    giúp khách hàng giải quyết mọi vấn đề một cách triệt để và nhanh chóng nhất.`,
    },
    {
      id: 'quyet-toan-thue',
      content1: `Chúng tôi cung cấp các dịch vụ quyết toán thuế liên quan đến xác định (giải quyết), tư vấn về các trách nhiệm, nghĩa vụ, 
      và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế, dịch vụ thuê - kế toán 2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế.
       Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh nghiệp với các dịch vụ kế toán trọn gói, đại lý thuế, 
       nộp báo cáo,…`,
      content2: `dịch vụ thuê - kế toán 2KT là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, 
      đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'dang-ky-kinh-doanh',
      content1: `Chúng tôi cung cấp các dịch vụ đăng ký kinh doanh liên quan đến xác định (giải quyết), tư vấn về các trách nhiệm, nghĩa vụ, 
    và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế, dịch vụ thuê - kế toán 2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế.
     Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh nghiệp với các dịch vụ kế toán trọn gói, đại lý thuế, 
     nộp báo cáo,…`,
      content2: `dịch vụ thuê - kế toán 2KT là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, 
     đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'dai-ly-thue',
      content1: `Chúng tôi cung cấp các dịch vụ đại lý thuế liên quan đến xác định (giải quyết), 
    tư vấn về các trách nhiệm, nghĩa vụ, và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế,
     dịch vụ thuê - kế toán 2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế. 
     Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh
      nghiệp với các dịch vụ kế toán trọn gói, quyết toán thuế, nộp báo cáo,…`,
      content2: `dịch vụ thuê - kế toán 2KT không chỉ là một đại lý thuế thông thường mà còn là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp 
      mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'bao-hiem-xa-hoi',
      content1: `Dịch vụ Bảo hiểm xã hội là một phần không thể thiếu đối với các doanh nghiệp mới thành lập hoặc mở rộng nhân sự. 
    Để thực hiện các quy trình hồ sơ lao động – bảo hiểm và đảm bảo chính sách phúc lợi xã hội cho nhân viên,
     việc đăng ký hồ sơ bảo hiểm xã hội là bước quan trọng. `,
      content2: `Tuy nhiên, rất nhiều doanh nghiệp vẫn gặp khó khăn trong quá trình này. 
     Nếu bạn đang đối mặt với những thách thức trong việc thực hiện thủ tục này,
      hãy để dịch vụ thuê - kế toán 2KT giúp bạn đơn giản hóa mọi điều với dịch vụ Bảo hiểm xã hội của chúng tôi. `,
    },
    {
      id: 'dao-tao-ke-toan',
      content1: `Dịch vụ đào tạo kế toán giúp cung cấp nguồn nhân lực chất lượng cho các công ty, tạo điều kiện cho các thực tập sinh
    có điều kiện làm trong môi trường thực tế chuyên ngiệp.`,
      content2: `Đào tạo kế toán không chỉ đào tạo các kiến thức cơ bản, nâng cao mà còn giúp học viên nắm rõ được các quy trình, làm việc trên những quy trình thực tế, chuyên nghiệp
       giúp học viên tích lũy được những 
    kinh nghiệm thực tế, cung cấp nguồn nhân lực chất lượng cho thị trường.`,
    },
  ];
  divHeight = '';
  constructor(
    private activeRoute: ActivatedRoute,
    private commonStore: CommonStore,
    private renderer: Renderer2,
    private el: ElementRef,
    private route: Router
  ) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   const scrollPosition = window.scrollY || window.pageYOffset;
  //   if (scrollPosition < 4600) {
  //     this.divHeight = `${scrollPosition - 3600}`;
  //   }
  // }

  vm$ = this.commonStore.select((state) => {
    return {
      selectedService: state.selectedService,
      selectedDetailServiceId: state.selectedDetailServiceId,
      selectedServiceId: state.selectedServiceId,
    };
  });

  contentWhys = [
    {
      title: 'TIẾT KIỆM THỜI GIAN VÀ CHI PHÍ',
      content: `Dịch vụ kế toán trọn gói giúp doanh nghiệp tiết kiệm được khá nhiều chi phí như chi phí đầu tư vào máy móc, phần mềm, 
      chi phí đào tạo nhân sự, chi phí lương,… Đặc biệt, đối với các doanh nghiệp vừa và nhỏ, hoặc đang trong giai đoạn khởi nghiệp, 
      khi nguồn lực tài chính còn eo hẹp thì việc lựa chọn dịch vụ kế toán trọn gói từ dịch vụ thuê - kế toán 2KT sẽ là lựa chọn tối ưu nhất.`,
    },
    {
      title: 'BẢO MẬT THÔNG TIN TUYỆT ĐỐI',
      content: `Dịch vụ thuê - kế toán 2KT cam kết khi sử dụng dịch vụ kế toán trọn gói sẽ bảo mật thông tin tuyệt đối, 
      tuân thủ theo các tiêu chuẩn ngành, liên tục được cập nhật và kiểm tra hệ thống để đảm bảo an toàn thông tin và 
      dữ liệu của khách hàng từ bất kỳ rủi ro nào.`,
    },
    {
      title: 'QUY TRÌNH LÀM VIỆC CHUYÊN NGHIỆP',
      content: `Đội ngũ Kế toán và Luật sư nhiều năm kinh nghiệm luôn phục vụ khách hàng tận tâm và nhiệt tình với dịch vụ kế toán Doanh nghiệp trọn gói. 
      Không chỉ là những chuyên gia bề dày kinh nghiệm mà còn là đối tác đồng hành, sẵn sàng hỗ trợ khách hàng để cùng tiến đến sự thành công bền vững và 
      hiệu quả trong quản lý tài chính, kế toán, pháp lý.`,
    },
    {
      title: 'THÔNG TIN MINH BẠCH',
      content: `Chúng tôi đặt sự minh bạch hàng đầu trong việc tư vấn và đàm phán, 
      cam kết cung cấp thông tin rõ ràng và chi tiết về dịch vụ kế toán Doanh nghiệp trọn gói. Sau khi đội ngũ kế toán của dịch vụ thuê - kế toán 2KT đã thực hiện kiểm tra thông tin và 
      rà soát số liệu một cách kỹ lưỡng sẽ thông báo chi phí cụ thể, rõ ràng, tối ưu nhất về dịch vụ kế toán trọn gói đến khách hàng.`,
    },
    {
      title: 'ĐẢM BẢO CHÍNH XÁC TUYỆT ĐỐI',
      content: `Chúng tôi cam kết đảm bảo chính xác tuyệt đối trong mọi khía cạnh của quy trình cung cấp dịch vụ kế toán Doanh nghiệp trọn gói.
     Điều này không chỉ giúp dịch vụ thuê - kế toán 2KT duy trì mà còn nâng cao chất lượng của dịch vụ kế toán trọn gói, mang lại sự tin cậy cao nhất cho doanh nghiệp của bạn.`,
    },
    {
      title: 'DỰ ĐOÁN RỦI RO TÀI CHÍNH',
      content: `Với những kế toán viên có năng lực chuyên môn cao, dựa trên báo cáo theo quý, năm, dịch vụ kế toán thuế chuyên nghiệp có thể theo sát tình hình tài chính của bạn, 
    đồng thời đưa ra những dự đoán về rủi ro tài chính có thể xảy ra với doanh nghiệp.`,
    },
  ];

  listServiceMajor = [
    {
      id: 'thanh-lap',
      major: [
        {
          icon: 'fa-solid fa-clipboard-list',
          title: `THỦ TỤC KÊ KHAI,
        ĐĂNG KÝ THUẾ BAN ĐẦU`,
          content: `Thực hiện hồ sơ thuế ban đầu cho doanh nghiệp mới thành lập,chưa kê khai ban đầu. 
          Hỗ trợ các nghiệp vụ liên quan đến thuế thu nhập doanh nghiệp, thu nhập cá nhân, giá trị gia tăng và các loại thuế liên quan khác.`,
        },
        {
          icon: 'fa-solid fa-address-book',
          title: `LẬP VÀ XÂY DỰNG
        SỔ KẾ TOÁN BAN ĐẦU`,
          content:
            'Kiểm tra chứng từ đầu ra, đầu vào và phân loại, sắp xếp, đóng chứng từ. Đồng thời định khoản các nghiệp vụ, thực hiện hạch toán và ghi sổ tay kế toán. Lập và in sổ sách theo quy định.',
        },
        {
          icon: 'fa-solid fa-wallet',
          title:
            'THỦ TỤC NỘP THUẾ MÔN BÀI, ĐĂNG KÝ MUA, ĐẶT IN HÓA ĐƠN BAN ĐẦU',
          content:
            'Dịch vụ thuê - kế toán 2KT thay mặt khách hàng liên hệ và phối hợp với cán bộ Thuế để thực hiện các nghiệp vụ theo quy định.',
        },
        {
          icon: 'fa-solid fa-file-invoice-dollar',
          title: `THỰC HIỆN HẠCH TOÁN,
        GHI CHÉP CHỨNG TỪ,
        GIAO DỊCH THEO QUY ĐỊNH`,
          content: 'Thực hiện các nghiệp vụ theo quy định.',
        },
        {
          icon: 'fa-solid fa-landmark',
          title: `LẬP BÁO CÁO THUẾ HÀNG THÁNG, QUÝ, NĂM GỬI CƠ QUAN THUẾ THEO QUY ĐỊNH`,
          content:
            'Cân đối lãi – lỗ và lập báo cáo tài chính cuối năm cho doanh nghiệp để nộp đến cơ quan Nhà nước theo quy định.',
        },
        {
          icon: 'fa-solid fa-building-user',
          title: 'ĐẠI DIỆN GIẢI TRÌNH',
          content:
            'Nhân viên kế toán, kế toán trưởng thay mặt doanh nghiệp ký các sổ sách, chứng từ kế toán',
        },
        {
          icon: 'fa-regular fa-file-lines',
          title: 'KIỂM TRA CHỨNG TỪ',
          content:
            'Nhân viên thực hiện kiểm tra chứng từ đầu vào, đầu ra theo đúng quy định của pháp luật',
        },
      ],
    },
    {
      id: 'ke-toan',
      major: [
        {
          icon: 'fa-solid fa-address-book',
          title: `KIỂM TRA,
    ĐỐI SOÁT SỔ SÁCH KẾ TOÁN`,
          content: `Xác minh sự khớp lệch giữa các giao dịch được ghi chép và thực tế diễn ra trong doanh nghiệp. 
          Phát hiện và sửa chữa lỗi kế toán, tránh những sai sót có thể ảnh hưởng đến quyết định kinh doanh.`,
        },
        {
          icon: 'fa-solid fa-file-invoice',
          title: `DỊCH VỤ KẾ TOÁN TRỌN GÓI`,
          content: `Thủ tục kê khai, đăng ký thuế ban đầu Lập và xây dựng sổ kế toán ban đầu. 
          Thủ tục nộp thuế môn bài, đăng ký mua, đặt in hóa đơn ban đầu. Thực hiện hạch toán, ghi chép chứng từ, giao dịch theo quy định. 
          Lập báo cáo thuế hàng tháng, quý, năm gửi cơ quan thuế theo quy định. Đại diện giải trình. Kiểm tra chứng từ`,
        },
        {
          icon: 'fa-solid fa-scale-balanced',
          title: `TƯ VẤN LUẬT DOANH NGHIỆP`,
          content: `Hỗ trợ doanh nghiệp trong việc hiểu và tuân thủ các quy định pháp luật liên quan. 
          Định hình và tối ưu hóa chiến lược pháp lý cho sự phát triển của doanh nghiệp.`,
        },
        {
          icon: 'fa-solid fa-paste',
          title: `KIỂM TOÁN HỒ SƠ QUYẾT TOÁN`,
          content: `Xem xét kỹ lưỡng, chi tiết tất cả các tài liệu, số liệu, và ghi chú liên quan đến quyết toán thuế của doanh nghiệp. 
          Xây dựng một hệ thống kế toán chặt chẽ và minh bạch, tạo nền tảng cho quản lý tài chính hiệu quả và quyết định chiến lược.`,
        },
      ],
    },
    {
      id: 'thay-doi-gpkd',
      major: [
        {
          icon: 'fa-solid fa-address-book',
          title: `KIỂM TRA,
        ĐỐI SOÁT SỔ SÁCH KẾ TOÁN`,
          content: `Xác minh sự khớp lệch giữa các giao dịch được ghi chép và thực tế diễn ra trong doanh nghiệp. 
        Phát hiện và sửa chữa lỗi kế toán, tránh những sai sót có thể ảnh hưởng đến quyết định kinh doanh.`,
        },
        {
          icon: 'fa-solid fa-file-invoice',
          title: `DỊCH VỤ KẾ TOÁN TRỌN GÓI`,
          content: `Thủ tục kê khai, đăng ký thuế ban đầu Lập và xây dựng sổ kế toán ban đầu. 
          Thủ tục nộp thuế môn bài, đăng ký mua, đặt in hóa đơn ban đầu. Thực hiện hạch toán, ghi chép chứng từ, giao dịch theo quy định. Lập báo cáo thuế hàng tháng, quý, năm gửi cơ quan thuế theo quy định. Đại diện giải trình. Kiểm tra chứng từ`,
        },
        {
          icon: 'fa-solid fa-scale-balanced',
          title: `TƯ VẤN LUẬT DOANH NGHIỆP, KIỂM TOÁN HỒ SƠ QUYẾT TOÁN`,
          content: `Định hình và tối ưu hóa chiến lược pháp lý cho sự phát triển của doanh nghiệp. 
          Xem xét kỹ lưỡng, chi tiết tất cả các tài liệu, số liệu, và ghi chú liên quan đến quyết toán thuế của doanh nghiệp. 
          Xây dựng hệ thống kế toán chặt chẽ và minh bạch, quản lý tài chính hiệu quả và quyết định chiến lược.`,
        },
      ],
    },
    {
      id: 'dich-vu-khac',
      major: [
        {
          icon: 'fa-solid fa-clipboard-list',
          title: `THỦ TỤC KÊ KHAI,
          ĐĂNG KÝ THUẾ BAN ĐẦU`,
          content: `Thực hiện hồ sơ thuế ban đầu cho doanh nghiệp mới thành lập, chưa kê khai ban đầu. Hỗ trợ các nghiệp vụ liên quan đến thuế thu nhập doanh nghiệp, 
          thu nhập cá nhân, giá trị gia tăng và các loại thuế liên quan khác.`,
        },
        {
          icon: 'fa-solid fa-address-book',
          title: `LẬP VÀ XÂY DỰNG
          SỔ KẾ TOÁN BAN ĐẦU`,
          content: `Kiểm tra chứng từ đầu ra, đầu vào và phân loại, sắp xếp, đóng chứng từ. 
          Đồng thời định khoản các nghiệp vụ, thực hiện hạch toán và ghi sổ tay kế toán. Lập và in sổ sách theo quy định.`,
        },
        {
          icon: 'fa-solid fa-wallet',
          title: `THỦ TỤC NỘP THUẾ MÔN BÀI, ĐĂNG KÝ MUA, ĐẶT IN HÓA ĐƠN BAN ĐẦU`,
          content: `Dịch vụ thuê - kế toán 2KT thay mặt khách hàng liên hệ và phối hợp với cán bộ Thuế để thực hiện các nghiệp vụ theo quy định.`,
        },
        {
          icon: 'fa-solid fa-file-invoice-dollar',
          title: `THỰC HIỆN HẠCH TOÁN,
          GHI CHÉP CHỨNG TỪ,
          GIAO DỊCH THEO QUY ĐỊNH`,
          content: `Thực hiện các nghiệp vụ theo quy định.`,
        },
        {
          icon: 'fa-solid fa-landmark',
          title: `LẬP BÁO CÁO THUẾ HÀNG THÁNG, QUÝ, NĂM GỬI CƠ QUAN THUẾ THEO QUY ĐỊNH`,
          content: `Cân đối lãi – lỗ và lập báo cáo tài chính cuối năm cho doanh nghiệp để nộp đến cơ quan Nhà nước theo quy định.`,
        },
        {
          icon: 'fa-solid fa-building-user',
          title: `ĐẠI DIỆN GIẢI TRÌNH`,
          content: `Nhân viên kế toán, kế toán trưởng thay mặt doanh nghiệp ký các sổ sách, chứng từ kế toán`,
        },
        {
          icon: 'fa-regular fa-file-lines',
          title: `KIỂM TRA CHỨNG TỪ`,
          content: `Nhân viên thực hiện kiểm tra chứng từ đầu vào, đầu ra theo đúng quy định của pháp luật`,
        },
      ],
    },
  ];

  process = [
    {
      title: `TIẾP NHẬN THÔNG TIN`,
      content: `Dịch vụ thuê - kế toán 2KT tiếp nhận thông tin tiếp nhận thông tin từ khách hàng và tiến hành trao đổi chi tiết, 
      liệt kê thông tin để tìm ra vấn đề mấu chốt mà khách hàng đang gặp phải. 
      Những thông tin khách hàng cung cấp sẽ được chuyển giao đến các chuyên viên để kiểm tra thông tin và phân tích vấn đề.`,
      step: 1,
    },
    {
      title: `KIỂM TRA THÔNG TIN`,
      content: `Dịch vụ thuê - kế toán 2KT sẽ kiểm tra và xác minh thông tin khách hàng cung cấp để đảm bảo tính chính xác, đầy đủ và hợp lệ. 
    Sau đó khách hàng sẽ được tư vấn sơ bộ và lắng nghe các đề xuất giải pháp cho doanh nghiệp của mình.`,
      step: 2,
    },
    {
      title: `GỬI BÁO PHÍ DỊCH VỤ CỤ THỂ`,
      content: `Sau khi đề xuất các giải pháp, chuyên viên tư vấn sẽ lập và gửi bảng báo giá chi tiết, mô tả rõ từng khoản chi phí và điều kiện thanh toán.`,
      step: 3,
    },
    {
      title: `KÝ HỢP ĐỒNG DỊCH VỤ`,
      content: `Sau khi đàm phán về các điều khoản và điều kiện, hợp đồng dịch vụ được lập thành văn bản và tiến đến ký kết giữa các bên.`,
      step: 4,
    },
    {
      title: `YÊU CẦU CUNG CẤP DỮ LIỆU KẾ TOÁN ĐỂ THỰC HIỆN RÀ SOÁT`,
      content: `Khách hàng chuyển giao những thông tin và dữ liệu kế toán cần thiết để bộ phận kế toán thực hiện kiểm tra, rà soát, 
      tính toán một cách đầy đủ và chính xác để từ đó lập các báo cáo và hoàn thiện hồ sơ liên quan.`,
      step: 5,
    },
    {
      title: `LIÊN HỆ CÁN BỘ THUẾ PHỤ TRÁCH VÀ PHỐI HỢP LÀM VIỆC THUẾ`,
      content: `Dịch vụ thuê - kế toán 2KT thay mặt khách hàng liên hệ và phối hợp với cán bộ Thuế để thực hiện các nghiệp vụ theo quy định.`,
      step: 6,
    },
    {
      title: `THÔNG BÁO CHO KHÁCH HÀNG KHI CÓ QUYẾT ĐỊNH`,
      content: `Sau khi quá trình hoàn tất, dịch vụ thuê - kế toán 2KT sẽ nhanh chóng thông báo về kết quả thực hiện thủ tục cho khách hàng.`,
      step: 7,
    },
  ];

  ngOnInit() {
    const selectedServiceId = this.activeRoute.snapshot.params['id'];
    if (selectedServiceId) {
      const selectedService = ListServices.find((x) =>
        x.contents.find((c) => c.nav === selectedServiceId)
      );
      this.commonStore.patchState({
        selectedDetailServiceId: selectedServiceId,
      });
      this.commonStore.patchState({ selectedService: selectedService });
    } else {
      this.commonStore.patchState({ selectedServiceId: 'dich-vu' });
      this.route.navigate(['dich-vu']);
    }
  }

  getDescription(detailService: string, service: ServiceModel) {
    if (!detailService) return service.description;
    return (
      service.contents.find((x) => x.nav === detailService)?.label ??
      service.description
    );
  }
}
