import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-slide',
  templateUrl: './customers-slide.component.html',
  styleUrls: ['./customers-slide.component.scss'],
})
export class CustomersSlideComponent implements OnInit {
  items = [
    'https://i.imgur.com/JyaIFQO.jpg',
    'https://i.imgur.com/B3Zhx2V.jpg',
    'https://i.imgur.com/m8J0s1a.jpg',
    'https://i.imgur.com/DlEnTvq.jpg',
    'https://i.imgur.com/E8cRS0Z.jpg',
    'https://i.imgur.com/qMdSfv5.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
