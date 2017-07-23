import { Component } from '@angular/core';
import { CognitoService } from '../../services/cognito/cognito.service';
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
    private cognitoService: CognitoService,
    public userService: UserService
  ) { }

  signIn(): void {
    this.cognitoService.signIn(this.userService.signInModel);
  }
}
