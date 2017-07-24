import { Component } from '@angular/core';
import { CognitoSignInService } from '../../services/cognito/cognito-sign-in.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.css',
    '../user.module.css'
  ]
})

export class SignInComponent {

  constructor(
    private cognitoSignInService: CognitoSignInService,
    public userService: UserService
  ) { }

  signIn(email: string, password: string): void {
    this.cognitoSignInService.signIn(email, password);
  }
}
