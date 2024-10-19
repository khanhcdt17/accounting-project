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
