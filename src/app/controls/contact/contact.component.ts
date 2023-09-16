import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactUSServices } from '../../contact-us.services.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private contactService: ContactUSServices
  ) {}
  name: string = '';
  email: string;
  subject: string;
  message: string;
  cell: string;

  contactUs(form: NgForm) {
    this.contactService
      .contactUs(
        form.control.value.name,
        form.control.value.email,
        form.control.value.subject,
        form.control.value.message,
        form.control.value.cell
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
