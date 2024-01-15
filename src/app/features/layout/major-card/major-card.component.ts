import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-major-card',
  templateUrl: './major-card.component.html',
  styleUrls: ['./major-card.component.scss'],
})
export class MajorCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() content = '';
}
