import { Component, OnInit, Input } from '@angular/core';
import { ValidationErrors, NgForm } from '@angular/forms';

@Component({
  selector: 'validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {
  @Input() public errors: ValidationErrors;
  @Input() public controlName: string;
  @Input() public formForValidation: NgForm;

  errorType: string;

  constructor() { }

  ngOnInit(): void {
  }

  getError(): any {
    if (this.formForValidation) {
      for (let name in this.formForValidation.controls) {
        const controlErrors = this.formForValidation.controls[name].errors;
        if (controlErrors) {
          for (let errorType in controlErrors) {
            this.errorType = errorType;
            return {
              errorType: errorType,
              controlName: name
            };
          }
        }
      }
    }
  }

  hideMessage(): void {
    this.errorType = null;
  }
}
