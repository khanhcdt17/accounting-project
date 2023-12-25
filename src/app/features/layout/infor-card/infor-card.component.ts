import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infor-card',
  templateUrl: './infor-card.component.html',
  styleUrls: ['./infor-card.component.scss'],
})
export class InforCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() content = '';
  @Input() isStyle = true;
}
