export const DEFAULT_URL = 'https://i.imgur.com/zuC1C4w.jpg';

export const TAB_CONTENT = {
  TAX: 'TAX',
  COMPANY: 'COMPANY',
  PERSONAL: 'PERSONAL',
};

export const CATE_ID = {
  TAX: 23449,
  COMPANY: 7452946,
  PERSONAL: 812108,
};

export interface ServiceModel {
  key: string;
  title: string;
  description: string;
  contents: ServiceContent[];
}

export interface ServiceContent {
  img: string;
  label: string;
  nav: string;
}

export const Service = {
  dichVu: 'dich-vu',
};

export const ListServices: ServiceModel[] = [
  {
    key: Service.dichVu,
    title: 'Giải pháp toàn diện cho khách hàng',
    description:
      'Cam kết cung cấp các giải pháp thuế toàn diện cho khách hàng, Luôn rõ ràng trong tư vấn, đàm phán và quy trình làm việc, mang lại hiệu quả tốt nhất cho khách hàng',
    contents: [
      {
        img: 'https://i.imgur.com/SIgFzGt.jpg',
        label: 'Dịch vụ thành lập',
        nav: 'thanh-lap',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Dịch vụ kế toán',
        nav: 'ke-toan',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Thay đổi GPKD',
        nav: 'thay-doi-gpkd',
      },
      {
        img: 'https://i.imgur.com/fz6vPUq.jpg',
        label: 'Dịch vụ khác',
        nav: 'dich-vu-khac',
      },
    ],
  },
  {
    key: 'thanh-lap',
    title: 'Dịch vụ thành lập',
    description: 'Dịch vụ thành lập công ty, doanh nghiệp Giá Rẻ - 250.000đ.',
    contents: [
      {
        img: 'https://i.imgur.com/SIgFzGt.jpg',
        label: 'Thành lập công ty',
        nav: 'thanh-lap-cong-ty',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Công ty TNHH',
        nav: 'cong-ty-tnhh',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Công ty cổ phần',
        nav: 'cong-ty-co-phan',
      },
      {
        img: 'https://i.imgur.com/fz6vPUq.jpg',
        label: 'Công ty vốn nước ngoài',
        nav: 'cong-ty-von-nuoc-ngoai',
      },
      {
        img: 'https://i.imgur.com/3abWgNu.jpg',
        label: 'Chi nhánh công ty',
        nav: 'chi-nhanh-cong-ty',
      },
      {
        img: 'https://i.imgur.com/P0V4AUm.jpg',
        label: 'Hộ kinh doanh cá thể',
        nav: 'ho-kinh-doanh-ca-the',
      },
    ],
  },
  {
    key: 'ke-toan',
    title: 'Dịch vụ kế toán',
    description: 'Dịch Vụ Kế Toán - Từ 500.000đ/tháng',
    contents: [
      {
        img: 'https://i.imgur.com/SIgFzGt.jpg',
        label: 'Kế toán trọn gói',
        nav: 'ke-toan-tron-goi',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Kế toán nội bộ',
        nav: 'ke-toan-noi-bo',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Khai thuế ban đầu',
        nav: 'khai-thue-ban-dau',
      },
      {
        img: 'https://i.imgur.com/fz6vPUq.jpg',
        label: 'Báo cáo tài chính',
        nav: 'bao-cao-tai-chinh',
      },
      {
        img: 'https://i.imgur.com/3abWgNu.jpg',
        label: 'Quyết toán thuế cuối năm',
        nav: 'quyet-toan-thue-cuoi-nam',
      },
      {
        img: 'https://i.imgur.com/P0V4AUm.jpg',
        label: 'Làm sổ sách kế toán',
        nav: 'lam-so-sach-ke-toan',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Hoàn thuế GTGT',
        nav: 'hoan-thue-gtgt',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Hoàn thuế TNCN',
        nav: 'hoan-thue-tncn',
      },
    ],
  },
  {
    key: 'thay-doi-gpkd',
    title: 'Thay đổi GPKD',
    description:
      'Dịch vụ làm thủ tục thay đổi giấy phép kinh doanh - Trọn gói 500.000đ',
    contents: [
      {
        img: 'https://i.imgur.com/SIgFzGt.jpg',
        label: 'Thay đổi tên',
        nav: 'thay-doi-ten',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Đổi địa chỉ',
        nav: 'doi-dia-chi',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Thêm ngành nghề',
        nav: 'them-nganh-nghe',
      },
      {
        img: 'https://i.imgur.com/fz6vPUq.jpg',
        label: 'Tăng vốn điều lệ',
        nav: 'tang-von-dieu-le',
      },
      {
        img: 'https://i.imgur.com/3abWgNu.jpg',
        label: 'Thêm cổ đông',
        nav: 'them-co-dong',
      },
      {
        img: 'https://i.imgur.com/P0V4AUm.jpg',
        label: 'Đổi đại diện pháp luật',
        nav: 'doi-dai-dien-phap-luat',
      },
      {
        img: 'https://i.imgur.com/kFNcTLb.jpg',
        label: 'Đổi loại hình công ty',
        nav: 'doi-loai-hinh-cong-ty',
      },
      {
        img: 'https://i.imgur.com/jcCVM7S.jpg',
        label: 'Cập nhật CCCD',
        nav: 'cap-nhat-cccd',
      },
    ],
  },
  {
    key: 'dich-vu-khac',
    title: 'Dịch vụ khác',
    description: 'An tâm, vững bền với dịch vụ bảo hiểm xã hội.',
    contents: [],
  },
];
