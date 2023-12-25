import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('snapHeader') snapHeader!: ElementRef;

  ngAfterViewInit() {
    this.snapHeader.nativeElement.style.height = `${this.header.nativeElement.offsetHeight}px`;
  }
}
