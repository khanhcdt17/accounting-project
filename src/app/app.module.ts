import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { MessageComponent } from './features/chat-box/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentPageComponent } from './features/blog-page/content-page/content-page.component';
import { ChunkPipe } from './features/common/chunk.pipe';
import { ToastComponent } from './features/common/toast/toast.component';
import { ServiceContentComponent } from './features/service-page/service-content/service-content.component';

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
    MessageComponent,
    ContentPageComponent,
    ChunkPipe,
    ToastComponent,
    ServiceContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
