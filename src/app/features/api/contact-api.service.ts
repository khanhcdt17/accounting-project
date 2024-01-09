import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  private formSpreeUrl = 'https://formspree.io/f/mkndnlzz';

  constructor(private http: HttpClient) {}
  submitForm(data: any) {
    return this.http.post(this.formSpreeUrl, data);
  }
}
