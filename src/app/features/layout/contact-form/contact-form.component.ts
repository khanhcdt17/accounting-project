import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactApiService } from '../../api/contact-api.service';
import { ToastComponent } from '../../common/toast/toast.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  lastSubmitTime!: number;
  cooldownTime: number = 5000;

  constructor(private fb: FormBuilder, private contactApi: ContactApiService) {}
  @ViewChild(ToastComponent) toast!: ToastComponent;
  ngOnInit() {
    this.lastSubmitTime = 0;
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      gender: [''],
      description: [''],
    });
  }

  onSubmit() {
    const currentTime = Date.now();
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      if (currentTime - this.lastSubmitTime >= this.cooldownTime) {
        const formData = {
          ['Thông báo']: 'Người dùng đã gửi thông tin tư vấn',
          ['Danh xưng']: this.contactForm.controls['gender']?.value
            ? 'Anh'
            : 'Chị',
          ['Tên']: this.contactForm.controls['name']?.value,
          ['Số điện thoại']: this.contactForm.controls['phone']?.value,
          ['Địa chỉ email']: this.contactForm.controls['email']?.value,
          ['Thông tin cần tư vấn']:
            this.contactForm.controls['description']?.value,
        };

        this.contactApi.submitForm(formData).subscribe((response) => {
          this.toast.open('Gửi thông tin thành công', 'alert-success');
        });
        this.contactForm.reset();
      } else {
        this.toast.open(
          'Vui lòng gửi lại thông tin sau 5 giây',
          'alert-warning'
        );
      }
      this.lastSubmitTime = currentTime;
    }
  }
}
