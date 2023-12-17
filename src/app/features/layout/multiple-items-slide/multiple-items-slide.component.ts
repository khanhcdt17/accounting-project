import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-multiple-items-slide',
  templateUrl: './multiple-items-slide.component.html',
  styleUrls: ['./multiple-items-slide.component.scss']
})
export class MultipleItemsSlideComponent implements OnInit, AfterViewInit {

  dataImage = [
    'https://i.imgur.com/JyaIFQO.jpg',
    'https://i.imgur.com/B3Zhx2V.jpg',
    'https://i.imgur.com/DlEnTvq.jpg',
    'https://i.imgur.com/m8J0s1a.jpg',
    'https://i.imgur.com/E8cRS0Z.jpg',
    'https://i.imgur.com/qMdSfv5.jpg',
    'https://i.imgur.com/xWxX0NN.png'
  ]
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const items = this.el.nativeElement.querySelectorAll('.carousel .carousel-item');
    items.forEach((el: HTMLElement) => {
      const minPerSlide = 7;
      let next = el.nextElementSibling as HTMLElement;
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          // Wrap carousel by using first child
          next = items[0] as HTMLElement;
        }
        const cloneChild = next.cloneNode(true) as HTMLElement;
        this.renderer.appendChild(el, cloneChild.children[0]);
        next = next.nextElementSibling as HTMLElement;
      }
    });
  }

  ngOnInit(): void {
  }
}

