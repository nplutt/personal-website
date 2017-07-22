import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as CognitoIdentity from "aws-sdk/clients/cognitoidentity";

import { SignUpModel } from '../../models/sign-up.model'


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
        console.log(result);
      }
    });
  }

  confirmRegistration(email: string, confirmationCode: string): void {
    let userData = {
      UserName: email,
      Pool: this.getUserPool()
    };

    let cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result);
      }
    });
  }

}
