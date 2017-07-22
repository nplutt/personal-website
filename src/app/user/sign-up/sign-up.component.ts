import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/cognito/cognito.service';
import { UserService } from '../../services/user/user.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(
    private cognitoService: CognitoService,
    private router: Router,
    public userService: UserService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)
  ]);

  passwordsMatch(): boolean {
    return this.userService.signUpModel.password === this.userService.signUpModel.confirmPassword;
  }

  signUp(): void {
    this.cognitoService.signUp(this.userService.signUpModel);
  }

  confirm(): void {
    this.cognitoService.confirmRegistration(this.userService.signUpModel);
  }

  routeAtSignUp(): boolean {
    return this.router.url === '/sign-up';
  }

}
