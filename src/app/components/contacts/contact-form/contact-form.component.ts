import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  userNameCtrl: FormControl;
  userEmailCtrl: FormControl;
  userPhoneCtrl: FormControl;
  userMessageCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.userNameCtrl = fb.control('', [Validators.required]);
    this.userEmailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.userPhoneCtrl = fb.control('', []);
    this.userMessageCtrl = fb.control('', [Validators.required, Validators.minLength(10)]);

    this.contactForm = fb.group({
      userName: this.userNameCtrl,
      userEmail: this.userEmailCtrl,
      userPhone: this.userPhoneCtrl,
      userMessage: this.userMessageCtrl
    });
  }

  ngOnInit(): void { }

  sendMessage(): void {
    if (this.contactForm.valid) {
      console.log(`Form submitted`, this.contactForm.value);
    } else {
      console.log( `Something wrong`);
    }
  }

}
