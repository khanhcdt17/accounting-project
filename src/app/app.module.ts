import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ContentsComponent } from './features/contents/contents.component';
import { HeaderComponent } from './features/header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContentsComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
