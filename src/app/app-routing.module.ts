import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ContactPageComponent } from './features/contact-page/contact-page.component';
import { ServicePageComponent } from './features/service-page/service-page.component';
import { BlogPageComponent } from './features/blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'gioi-thieu',
    component: AboutPageComponent,
  },
  {
    path: 'lien-he',
    component: ContactPageComponent,
  },
  {
    path: 'dich-vu',
    component: ServicePageComponent,
  },
  {
    path: 'tin-tuc',
    component: BlogPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
