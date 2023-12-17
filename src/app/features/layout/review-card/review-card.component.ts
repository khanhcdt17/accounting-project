import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  items = [
    {
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Ronne Galle',
      position: 'Project Manager',
      comment: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat'
    },
    {
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Ronne Galle 2',
      position: 'Project Manager',
      comment: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat'
    },
    {
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Ronne Galle 3',
      position: 'Project Manager',
      comment: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat'
    },
    {
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Ronne Galle 4',
      position: 'Project Manager',
      comment: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat'
    },
    {
      image: 'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Ronne Galle 5',
      position: 'Project Manager',
      comment: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat'
    }
  ]

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initCarousel();
  }

  private initCarousel(): void {
    const items = this.carousel.nativeElement.querySelectorAll('.slide');
    const minPerSlide = 4;

    let next = items[0] as HTMLElement;
    for (let i = 1; i < minPerSlide; i++) {
      const cloneChild = next.cloneNode(true) as HTMLElement;
      this.renderer.appendChild(this.carousel.nativeElement, cloneChild);
    }
  }
}
