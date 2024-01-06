import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private route: Router) {}

  redirectTo(url: string) {
    this.route.navigate([url]);
  }
}
