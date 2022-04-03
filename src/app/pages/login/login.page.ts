import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationUserMessage = {
    email: [
      { type: 'required', message: 'Please enter your Email' },
      { type: 'required', message: 'The entered email is incorrect' },
    ],
    password: [
      { type: 'required', message: 'Please enter your Password' },
      { type: 'required', message: 'Please enter a 5 digit passowed' },
    ],
  };

  validationFormUser: FormGroup;

  constructor(public formbuilder: FormBuilder) {}

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
    });
  }
}
