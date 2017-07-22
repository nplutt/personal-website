import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { SignUpModel } from '../../models/sign-up.model';
import { CognitoService } from '../../services/cognito/cognito.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(
    private cognitoService: CognitoService
  ) { }

  public model = new SignUpModel('', '');

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)
  ]);

  signUp(): void {
    this.cognitoService.signUp(this.model);
  }
}
