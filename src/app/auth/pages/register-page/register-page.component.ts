import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validations/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validations/email-validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  constructor(
    private fb:FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ){}


  public myForm: FormGroup = this.fb.group({

    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  })

  isValidField(field: string){
    return this.validatorsService.isValidField(this.myForm, field);
  }


  onSubmit(){
    this.myForm.markAllAsTouched();
  }



}
