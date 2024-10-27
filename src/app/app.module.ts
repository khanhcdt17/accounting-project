import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { HeaderComponent } from './features/layout/header/header.component';
import { InforCardComponent } from './features/layout/infor-card/infor-card.component';
import { ProfileCardComponent } from './features/layout/profile-card/profile-card.component';
import { CustomersSlideComponent } from './features/layout/customers-slide/customers-slide.component';
import { ServiceCardComponent } from './features/layout/service-card/service-card.component';
import { FooterComponent } from './features/layout/footer/footer.component';
import { CoreValueComponent } from './features/layout/core-value/core-value.component';
import { ReviewCardComponent } from './features/layout/review-card/review-card.component';
import { CustomCarouselComponent } from './features/layout/custom-carousel/custom-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShapesComponent } from './features/layout/shapes/shapes.component';
import { CountersComponent } from './features/layout/counters/counters.component';
import { QuestionComponent } from './features/layout/question/question.component';
import { BlogCardComponent } from './features/layout/blog-card/blog-card.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ServicePageComponent } from './features/service-page/service-page.component';
import { BlogPageComponent } from './features/blog-page/blog-page.component';
import { ContactPageComponent } from './features/contact-page/contact-page.component';
import { LinkCardComponent } from './features/layout/link-card/link-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentPageComponent } from './features/blog-page/content-page/content-page.component';
import { ChunkPipe } from './features/common/chunk.pipe';
import { ToastComponent } from './features/common/toast/toast.component';
import { ServiceContentComponent } from './features/service-page/service-content/service-content.component';
import { MajorCardComponent } from './features/layout/major-card/major-card.component';
import { ContactFormComponent } from './features/layout/contact-form/contact-form.component';
import { ThanhLapCongTyComponent } from './features/service-page/service-details/thanh-lap-cong-ty/thanh-lap-cong-ty.component';
import { CongTyTnhhComponent } from './features/service-page/service-details/cong-ty-tnhh/cong-ty-tnhh.component';
import { CongTyCoPhanComponent } from './features/service-page/service-details/cong-ty-co-phan/cong-ty-co-phan.component';
import { CongTyVonNuocNgoaiComponent } from './features/service-page/service-details/cong-ty-von-nuoc-ngoai/cong-ty-von-nuoc-ngoai.component';
import { ChiNhanhCongTyComponent } from './features/service-page/service-details/chi-nhanh-cong-ty/chi-nhanh-cong-ty.component';
import { HoKinhDoanhCaTheComponent } from './features/service-page/service-details/ho-kinh-doanh-ca-the/ho-kinh-doanh-ca-the.component';
import { KeToanTronGoiComponent } from './features/service-page/service-details/ke-toan-tron-goi/ke-toan-tron-goi.component';
import { KeToanNoiBoComponent } from './features/service-page/service-details/ke-toan-noi-bo/ke-toan-noi-bo.component';
import { KhaiThueBanDauComponent } from './features/service-page/service-details/khai-thue-ban-dau/khai-thue-ban-dau.component';
import { BaoCaoTaiChinhComponent } from './features/service-page/service-details/bao-cao-tai-chinh/bao-cao-tai-chinh.component';
import { QuyetToanThueCuoiNamComponent } from './features/service-page/service-details/quyet-toan-thue-cuoi-nam/quyet-toan-thue-cuoi-nam.component';
import { LamSoSachKeToanComponent } from './features/service-page/service-details/lam-so-sach-ke-toan/lam-so-sach-ke-toan.component';
import { HoanThueGtgtComponent } from './features/service-page/service-details/hoan-thue-gtgt/hoan-thue-gtgt.component';
import { HoanThueTncnComponent } from './features/service-page/service-details/hoan-thue-tncn/hoan-thue-tncn.component';
import { ThayDoiTenComponent } from './features/service-page/service-details/thay-doi-ten/thay-doi-ten.component';
import { DoiDiaChiComponent } from './features/service-page/service-details/doi-dia-chi/doi-dia-chi.component';
import { ThemNganhNgheComponent } from './features/service-page/service-details/them-nganh-nghe/them-nganh-nghe.component';
import { TangVonDieuLeComponent } from './features/service-page/service-details/tang-von-dieu-le/tang-von-dieu-le.component';
import { ThemCoDongComponent } from './features/service-page/service-details/them-co-dong/them-co-dong.component';
import { ThayDoiDaiDienPhapLuatComponent } from './features/service-page/service-details/thay-doi-dai-dien-phap-luat/thay-doi-dai-dien-phap-luat.component';
import { DoiLoaiHinhCongTyComponent } from './features/service-page/service-details/doi-loai-hinh-cong-ty/doi-loai-hinh-cong-ty.component';
import { CapNhatCccdComponent } from './features/service-page/service-details/cap-nhat-cccd/cap-nhat-cccd.component';
import { HoaDonDienTuComponent } from './features/service-page/service-details/hoa-don-dien-tu/hoa-don-dien-tu.component';
import { BaoHiemXaHoiComponent } from './features/service-page/service-details/bao-hiem-xa-hoi/bao-hiem-xa-hoi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CustomCarouselComponent,
    InforCardComponent,
    ProfileCardComponent,
    CustomersSlideComponent,
    ServiceCardComponent,
    FooterComponent,
    CoreValueComponent,
    ReviewCardComponent,
    ShapesComponent,
    CountersComponent,
    QuestionComponent,
    BlogCardComponent,
    AboutPageComponent,
    ServicePageComponent,
    BlogPageComponent,
    ContactPageComponent,
    LinkCardComponent,
    ContentPageComponent,
    ChunkPipe,
    ToastComponent,
    ServiceContentComponent,
    MajorCardComponent,
    ContactFormComponent,
    ThanhLapCongTyComponent,
    CongTyTnhhComponent,
    CongTyCoPhanComponent,
    CongTyVonNuocNgoaiComponent,
    ChiNhanhCongTyComponent,
    HoKinhDoanhCaTheComponent,
    KeToanTronGoiComponent,
    KeToanNoiBoComponent,
    KhaiThueBanDauComponent,
    BaoCaoTaiChinhComponent,
    QuyetToanThueCuoiNamComponent,
    LamSoSachKeToanComponent,
    HoanThueGtgtComponent,
    HoanThueTncnComponent,
    ThayDoiTenComponent,
    DoiDiaChiComponent,
    ThemNganhNgheComponent,
    TangVonDieuLeComponent,
    ThemCoDongComponent,
    ThayDoiDaiDienPhapLuatComponent,
    DoiLoaiHinhCongTyComponent,
    CapNhatCccdComponent,
    HoaDonDienTuComponent,
    BaoHiemXaHoiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
