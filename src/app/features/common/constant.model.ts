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

export const ListServices: ServiceModel[] = [
  {
    key: 'dich-vu',
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
        nav: 'thay-doi-gpkq',
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
    description:
      'Dịch vụ kế toán chuyên nghiệp, dánh thức tiềm năng tài chính.',
    contents: [],
  },
  {
    key: 'quyet-toan-thue',
    title: 'Dịch vụ quyết toán thuế',
    description: 'Dịch vụ quyết toán thuế chuyên nghiệp, hiệu suất tối đa.',
    contents: [],
  },
  {
    key: 'thay-doi-gpkq',
    title: 'Thay đổi GPKD',
    description: 'Khám phá sức mạnh tài chính với dịch vụ đại lý thuế.',
    contents: [],
  },
  {
    key: 'dich-vu-khaci',
    title: 'Dịch vụ khác',
    description: 'An tâm, vững bền với dịch vụ bảo hiểm xã hội.',
    contents: [],
  },
];
