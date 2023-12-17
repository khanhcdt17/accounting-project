import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ContentsComponent } from './features/contents/contents.component';
import { HeaderComponent } from './features/header/header.component';
import { CarouselComponent } from './features/layout/carousel/carousel.component';
import { InforCardComponent } from './features/layout/infor-card/infor-card.component';
import { ProfileCardComponent } from './features/layout/profile-card/profile-card.component';
import { MultipleItemsSlideComponent } from './features/layout/multiple-items-slide/multiple-items-slide.component';
import { ServiceCardComponent } from './features/layout/service-card/service-card.component';
import { FooterComponent } from './features/layout/footer/footer.component';
import { CoreValueComponent } from './features/layout/core-value/core-value.component';
import { ReviewCardComponent } from './features/layout/review-card/review-card.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ContentsComponent, HeaderComponent, CarouselComponent, InforCardComponent, ProfileCardComponent, MultipleItemsSlideComponent, ServiceCardComponent, FooterComponent, CoreValueComponent, ReviewCardComponent, CarouselComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
