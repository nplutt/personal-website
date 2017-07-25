import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoSignUpService } from '../../services/cognito/cognito-sign-up.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    './sign-up.component.css',
    '../user.module.css'
  ]
})

export class SignUpComponent {

  constructor(
    private cognitoSignUpService: CognitoSignUpService,
    private router: Router
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)
  ]);

  passwordConfirmFormControl = new FormControl('', [
    Validators.required
  ]);

  displayConfirmPasswordError(password: string, confirmPassword: string): boolean {
    return !(password === confirmPassword) && this.passwordConfirmFormControl.errors === null &&
      this.passwordConfirmFormControl.touched;
  }

  validSignUpForm(password: string, confirmPassword: string): boolean {
    let passwordValid: boolean = this.passwordFormControl.dirty && this.passwordFormControl.errors === null;
    let passwordConfirmValid: boolean = password === confirmPassword;
    let emailValid: boolean = this.emailFormControl.dirty && this.emailFormControl.errors === null;

    return passwordValid && passwordConfirmValid && emailValid;
  }

  signUp(email: string, password: string): void {
    this.cognitoSignUpService.signUp(email, password);
  }

  confirm(confirmationNumber: string): void {
    this.cognitoSignUpService.confirmRegistration(confirmationNumber);
  }

  routeAtSignUp(): boolean {
    return this.router.url === '/sign-up';
  }

}
