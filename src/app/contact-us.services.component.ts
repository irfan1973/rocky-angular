import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactUSServices {
  constructor(private http: HttpClient) {}

  contactUs(
    name: string,
    email: string,
    subject: string,
    message: string,
    cell: string
  ) {
    const contactUsForm = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      cell: cell,
      to: 'irfan.gill@gmail.com',
      from: 'contact@rockyroadsolutions.com',
    };
    return this.http.post<{ status: string; message: string }>(
      'https://www.rockyroadsolutions.com:3000/email',
      contactUsForm
    );
  }
}
