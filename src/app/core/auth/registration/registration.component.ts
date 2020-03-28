import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';
import { ValidationErrorComponent } from '../validation-error/validation-error.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent implements OnInit {
  @ViewChild(ValidationErrorComponent) validator:ValidationErrorComponent;
  user: any = {
    login: null,
    email: null,
    fullname: null,
    password: null
  };
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      debugger;
      const errorObj = this.validator.getError();
      form.controls[errorObj.controlName].markAsTouched();
      return;
    }
  }

  onInput(): void {
    this.validator.hideMessage();
  }

}
