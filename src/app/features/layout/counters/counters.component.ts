import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
  animations: [
    trigger('counterAnimation', [
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(50px)', // Adjust the Y value as needed
        })
      ),
      transition('hidden => visible', animate('500ms ease-in-out')),
    ]),
  ],
})
export class CountersComponent {
  yearEx = 10;
  customer = 100;
  staff = 12;
  service = 15;
  animationState: 'hidden' | 'visible' = 'hidden';

  onScroll() {
    const counterElement = document.querySelector(
      '.counter-content'
    ) as HTMLElement;
    if (counterElement) {
      const rect = counterElement.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        // Trigger the animation when the counters become visible
        this.animateCounters();
      }
    }
  }

  animateCounters() {
    this.animationState = 'visible';
  }
}
