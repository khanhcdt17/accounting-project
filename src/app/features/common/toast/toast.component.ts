import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  message!: string;
  alertType!: string;

  show: boolean = false;

  ngOnInit(): void {}

  open(message: string, type: string) {
    this.show = true;
    this.message = message;
    this.alertType = type;
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close(): void {
    this.show = false;
  }
}
