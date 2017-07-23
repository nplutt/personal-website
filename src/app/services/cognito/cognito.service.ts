import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";

import { Router } from '@angular/router';

import { RoutesService } from '../routes/routes.service';
import { SignUpModel } from '../../models/sign-up.model'
import { UserService } from '../user/user.service';


@Injectable()
export class CognitoService {

  public static _REGION = 'us-west-2';
  public static _USER_POOL_ID = 'us-west-2_etWLEXxb7';
  public static _CLIENT_ID = '1seifkobo236fni0v1b7imsur2';

  public static _POOL_DATA = {
    UserPoolId: CognitoService._USER_POOL_ID,
    ClientId: CognitoService._CLIENT_ID
  };

  public cognitoCreds = AWS.CognitoIdentityCredentials;

  constructor(
    private router: Router,
    private routesService: RoutesService,
    private userService: UserService
  ) { }


  getUserPool() {
    return new CognitoUserPool(CognitoService._POOL_DATA)
  }

  signUp(user: SignUpModel): void {
    let attributeList = [];

    let dataEmail = {
      Name: 'email',
      Value: user.email
    };
    attributeList.push(dataEmail);

    this.getUserPool().signUp(user.email, user.password, attributeList, null, (err, result) => {
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
      Pool: this.getUserPool()
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
