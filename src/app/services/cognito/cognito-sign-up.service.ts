import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

import { Router } from '@angular/router';
import { RoutesService } from '../routes/routes.service';
import { SignUpModel } from '../../models/sign-up.model'
import { UserService } from '../user/user.service';
import { CognitoUtilService } from './congito-util.service';


@Injectable()
export class CognitoSignUpService {

  constructor(
    private cognitoUtilService: CognitoUtilService,
    private router: Router,
    private routesService: RoutesService,
    private userService: UserService
  ) { }

  signUp(user: SignUpModel): void {
    let attributeList = [];

    let dataEmail = {
      Name: 'email',
      Value: user.email
    };
    attributeList.push(dataEmail);

    this.cognitoUtilService.getUserPool().signUp(user.email, user.password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        this.routesService.goToConfirmation(user.email);
        this.userService.signUpModel.password = null;
        this.userService.signUpModel.confirmPassword = null;
      }
    });
  }

  confirmRegistration(user: SignUpModel): void {
    if (!user.email) {
      user.email = this.router.parseUrl(this.router.url).queryParams['email'];
    }

    let userData = {
      Username: user.email,
      Pool: this.cognitoUtilService.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(user.confirmationNumber, true, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result);
        this.routesService.goToSignIn();
      }
    });
  }
}
