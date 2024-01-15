import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonStore } from '../../common/common.store';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss'],
})
export class ServiceContentComponent {
  introductionContents = [
    {
      id: 'ke-toan',
      content1: `Dịch vụ kế toán đóng vai trò quan trọng trong quá trình hoạt động của doanh nghiệp. 
    Kế toán không chỉ là một phần của hệ thống tài chính mà còn là trụ cột quan trọng giúp doanh nghiệp đi đúng hướng và duy trì sự ổn định. 
    Nhận thức được điều này, 2KT đã triển khai và cung cấp các dịch vụ kế toán trọn gói đáp ứng đầy đủ nghiệp vụ với mức chi phí tối ưu, 
    mang đến giải pháp hoàn hảo cho mọi doanh nghiệp.`,
      content2: `Với đội ngũ chuyên viên giàu kinh nghiệm, 2KT cam kết mang đến cho doanh nghiệp gói dịch vụ Kế Toán Thuế trọn gói chất lượng nhất. 
    Chúng tôi không chỉ đảm bảo tuân thủ quy định một cách chặt chẽ mà còn tối ưu hóa quy trình làm việc, giảm thiểu rủi ro, 
    giúp khách hàng giải quyết mọi vấn đề một cách triệt để và nhanh chóng nhất.`,
    },
    {
      id: 'quyet-toan-thue',
      content1: `Chúng tôi cung cấp các dịch vụ quyết toán thuế liên quan đến xác định (giải quyết), tư vấn về các trách nhiệm, nghĩa vụ, 
      và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế, 2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế.
       Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh nghiệp với các dịch vụ kế toán trọn gói, đại lý thuế, 
       nộp báo cáo,…`,
      content2: `2KT là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, 
      đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'dang-ky-kinh-doanh',
      content1: `Chúng tôi cung cấp các dịch vụ đăng ký kinh doanh liên quan đến xác định (giải quyết), tư vấn về các trách nhiệm, nghĩa vụ, 
    và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế, 2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế.
     Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh nghiệp với các dịch vụ kế toán trọn gói, đại lý thuế, 
     nộp báo cáo,…`,
      content2: `2KT là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, 
     đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'dai-ly-thue',
      content1: `Chúng tôi cung cấp các dịch vụ đại lý thuế liên quan đến xác định (giải quyết), 
    tư vấn về các trách nhiệm, nghĩa vụ, và quyền lợi của các pháp nhân (khách hàng). Theo đúng quy định của luật thuế,
     2KT đóng vai trò là đại diện cho các thực thể trong giao dịch với Ủy viên thuế. 
     Không chỉ giới hạn ở việc giải quyết vấn đề về thuế mà còn mở rộng ra xử lý các thách thức về kế toán của doanh
      nghiệp với các dịch vụ kế toán trọn gói, quyết toán thuế, nộp báo cáo,…`,
      content2: `2KT không chỉ là một đại lý thuế thông thường mà còn là người bạn đồng hành đáng tin cậy, tận tâm, chuyên nghiệp 
      mang lại giải pháp toàn diện và giúp doanh nghiệp xây dựng cơ sở tài chính vững chắc, đạt được mức độ tuân thủ cao nhất đối với các quy định thuế và kế toán.`,
    },
    {
      id: 'bao-hiem-xa-hoi',
      content1: `Dịch vụ Bảo hiểm xã hội là một phần không thể thiếu đối với các doanh nghiệp mới thành lập hoặc mở rộng nhân sự. 
    Để thực hiện các quy trình hồ sơ lao động – bảo hiểm và đảm bảo chính sách phúc lợi xã hội cho nhân viên,
     việc đăng ký hồ sơ bảo hiểm xã hội là bước quan trọng. `,
      content2: `Tuy nhiên, rất nhiều doanh nghiệp vẫn gặp khó khăn trong quá trình này. 
     Nếu bạn đang đối mặt với những thách thức trong việc thực hiện thủ tục này,
      hãy để 2KT giúp bạn đơn giản hóa mọi điều với dịch vụ Bảo hiểm xã hội của chúng tôi. `,
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

  constructor(
    private activeRoute: ActivatedRoute,
    private commonStore: CommonStore
  ) {}

  vm$ = this.commonStore.select((state) => {
    return {
      selectedService: state.selectedService,
    };
  });

  contentWhys = [
    {
      title: 'TIẾT KIỆM THỜI GIAN VÀ CHI PHÍ',
      content: `Dịch vụ kế toán trọn gói giúp doanh nghiệp tiết kiệm được khá nhiều chi phí như chi phí đầu tư vào máy móc, phần mềm, 
      chi phí đào tạo nhân sự, chi phí lương,… Đặc biệt, đối với các doanh nghiệp vừa và nhỏ, hoặc đang trong giai đoạn khởi nghiệp, 
      khi nguồn lực tài chính còn eo hẹp thì việc lựa chọn dịch vụ kế toán trọn gói từ 2KT sẽ là lựa chọn tối ưu nhất.`,
    },
    {
      title: 'BẢO MẬT THÔNG TIN TUYỆT ĐỐI',
      content: `2KT cam kết khi sử dụng dịch vụ kế toán trọn gói sẽ bảo mật thông tin tuyệt đối, 
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
      cam kết cung cấp thông tin rõ ràng và chi tiết về dịch vụ kế toán Doanh nghiệp trọn gói. Sau khi đội ngũ kế toán của 2KT đã thực hiện kiểm tra thông tin và 
      rà soát số liệu một cách kỹ lưỡng sẽ thông báo chi phí cụ thể, rõ ràng, tối ưu nhất về dịch vụ kế toán trọn gói đến khách hàng.`,
    },
    {
      title: 'ĐẢM BẢO CHÍNH XÁC TUYỆT ĐỐI',
      content: `Chúng tôi cam kết đảm bảo chính xác tuyệt đối trong mọi khía cạnh của quy trình cung cấp dịch vụ kế toán Doanh nghiệp trọn gói.
     Điều này không chỉ giúp 2KT duy trì mà còn nâng cao chất lượng của dịch vụ kế toán trọn gói, mang lại sự tin cậy cao nhất cho doanh nghiệp của bạn.`,
    },
    {
      title: 'DỰ ĐOÁN RỦI RO TÀI CHÍNH',
      content: `Với những kế toán viên có năng lực chuyên môn cao, dựa trên báo cáo theo quý, năm, dịch vụ kế toán thuế chuyên nghiệp có thể theo sát tình hình tài chính của bạn, 
    đồng thời đưa ra những dự đoán về rủi ro tài chính có thể xảy ra với doanh nghiệp.`,
    },
  ];

  listServiceMajor = [
    {
      id: 'ke-toan',
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
            '2KT thay mặt khách hàng liên hệ và phối hợp với cán bộ Thuế để thực hiện các nghiệp vụ theo quy định.',
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
      id: 'dai-ly-thue',
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
      id: 'quyet-toan-thue',
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
      id: 'dang-ky-kinh-doanh',
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
          content: `2KT thay mặt khách hàng liên hệ và phối hợp với cán bộ Thuế để thực hiện các nghiệp vụ theo quy định.`,
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
    {
      id: 'bao-hiem-xa-hoi',
      major: [
        {
          icon: 'fa-regular fa-id-card',
          title: `TẠO TÀI KHOẢN KÊ KHAI BẢO HIỂM XÃ HỘI CHO DOANH NGHIỆP`,
          content: `Đăng ký và thiết lập tài khoản trực tuyến để kê khai các thông tin liên quan đến Bảo hiểm xã hội của doanh nghiệp như
       đăng ký tham gia Bảo hiểm xã hội cho nhân viên, kê khai các thông tin về thu nhập và các chi phí phải đóng Bảo hiểm xã hội.`,
        },
        {
          icon: 'fa-solid fa-address-book',
          title: `ĐĂNG KÝ BẢO HIỂM XÃ HỘI LẦN ĐẦU CHO DOANH NGHIỆP VÀ NGƯỜI LAO ĐỘNG`,
          content: `Đăng ký thông tin doanh nghiệp và nhân viên, xác định các mức đóng góp Bảo hiểm xã hội, và thực hiện các bước cần thiết để tuân thủ các quy định pháp luật và chính sách Bảo hiểm xã hội.`,
        },
        {
          icon: 'fa-regular fa-paste',
          title: `THỦ TỤC NỘP HỒ SƠ BẢO HIỂM XÃ HỘI THAY DOANH NGHIỆP`,
          content: `2KT thay doanh nghiệp nộp hồ sơ trực tiếp tại cơ quan BHXH hoặc nộp trực tuyến qua mạng.`,
        },
      ],
    },
    {
      id: 'dao-tao-ke-toan',
      major: [
        {
          icon: 'fa-solid fa-graduation-cap',
          title: `TIẾP NHẬN HỌC VIÊN ĐÀO TẠO`,
          content: `Tiếp nhận các học viên, sinh viên mới ra trường về thực tập, đào tạo`,
        },
        {
          icon: 'fa-solid fa-book-open-reader',
          title: `ĐÀO TẠO CÁC QUY TRÌNH KẾ TOÁN CƠ BẢN`,
          content: `Đào tạo về nguyên lý kế toán, các quy trình cơ bản về kế toán, quy trình hoạt động của doanh nghiệp`,
        },
        {
          icon: 'fa-solid fa-layer-group',
          title: `ĐÀO TẠO NÂNG CAO`,
          content: `Đào tạo chuyên sâu về kế toán và luật doanh nghiệp, các linh vực liên quan`,
        },
      ],
    },
  ];

  ngOnInit() {
    const selectedServiceId = this.activeRoute.snapshot.params['id'];
    this.commonStore.patchState({ selectedServiceId });
  }
}
