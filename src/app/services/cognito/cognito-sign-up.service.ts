import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

import { Router } from '@angular/router';
import { RoutesService } from '../routes/routes.service';
import { CognitoUtilService } from './congito-util.service';


@Injectable()
export class CognitoSignUpService {

  constructor(
    private cognitoUtilService: CognitoUtilService,
    private router: Router,
    private routesService: RoutesService
  ) { }

  signUp(email: string, password: string): void {
    let attributeList = [];

    let dataEmail = {
      Name: 'email',
      Value: email
    };
    attributeList.push(dataEmail);

    this.cognitoUtilService.getUserPool().signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        this.routesService.goToConfirmation(email);
      }
    });
  }

  confirmRegistration(confirmationNumber: string): void {
   const email = this.router.parseUrl(this.router.url).queryParams['email'];

    let userData = {
      Username: email,
      Pool: this.cognitoUtilService.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationNumber, true, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result);
        this.routesService.goToSignIn();
      }
    });
  }
}
