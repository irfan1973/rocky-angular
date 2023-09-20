import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactUSServices {
  constructor(private http: HttpClient) {}

  contactUs(emailparams) {
    return this.http.post<{ status: string; message: string }>(
      "https://www.rockyroadsolutions.com:3000/email",
      emailparams
    );
  }
}
