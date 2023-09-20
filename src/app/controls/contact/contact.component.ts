import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ContactUSServices } from "../../contact-us.services.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private contactService: ContactUSServices
  ) {}
  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";
  cell: string = "";

  contactUs() {
    let emailParams: any = {};
    emailParams.to = "contact@rockyroadsolutions.com";
    emailParams.email = this.email;
    emailParams.subject = this.subject;
    emailParams.message =
      "Hi Support user with email " +
      this.email +
      "is trying to reach Rocky Road Solution for their inquiry about website development. you can reach out at cell " +
      this.cell +
      " and proceed from here.Thanks & Regards" +
      "\n" +
      "Rocky Road Notifications";
    emailParams.cell = this.cell;
    this.contactService.contactUs(emailParams).subscribe((res) => {
      console.log(res);
    });
  }
}
