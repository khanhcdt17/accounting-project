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

export interface serviceModel {
  key: string;
  serviceTitle: string;
  serviceDes: string;
}

export const ListServices: serviceModel[] = [
  {
    key: 'ke-toan',
    serviceTitle: 'Dịch vụ kế toán',
    serviceDes: 'Dịch vụ kế toán chuyên nghiệp, dánh thức tiềm năng tài chính.',
  },
  {
    key: 'quyet-toan-thue',
    serviceTitle: 'Dịch vụ quyết toán thuế',
    serviceDes: 'Dịch vụ quyết toán thuế chuyên nghiệp, hiệu suất tối đa.',
  },
  {
    key: 'dai-ly-thue',
    serviceTitle: 'Dịch vụ đại lý thuế',
    serviceDes: 'Khám phá sức mạnh tài chính với dịch vụ đại lý thuế.',
  },
  {
    key: 'bao-hiem-xa-hoi',
    serviceTitle: 'Dịch vụ bảo hiểm xã hội',
    serviceDes: 'An tâm, vững bền với dịch vụ bảo hiểm xã hội.',
  },
  {
    key: 'dang-ky-kinh-doanh',
    serviceTitle: 'Dịch vụ đăng ký kinh doanh',
    serviceDes: 'Chắp cánh cho sự phát triển doanh nghiệp của bạn.',
  },
  {
    key: 'dao-tao-ke-toan',
    serviceTitle: 'Dịch vụ đào tạo kế toán',
    serviceDes: 'Chuyên sâu, chất lượng, đào tạo kế toán chuyên nghiệp.',
  },
];
