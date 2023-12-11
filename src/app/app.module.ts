import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ContentsComponent } from './features/contents/contents.component';
import { HeaderComponent } from './features/header/header.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ContentsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
