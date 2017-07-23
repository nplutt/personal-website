import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

import { RoutesService } from '../routes/routes.service';
import { UserService } from '../user/user.service';
import { SignInModel } from "../../models/sign-in.model";
import { CognitoUtilService } from './congito-util.service';


@Injectable()
export class CognitoSignInService {

  public jwt: string;

  constructor(
    private cognitoUtilService: CognitoUtilService,
    private routesService: RoutesService,
    private userService: UserService
  ) { }



  signIn(user: SignInModel) {
    let authenticationData = {
      Username: user.email,
      Password: user.password
    };
    let authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
      Username: user.email,
      Pool: this.cognitoUtilService.getUserPool()
    };
    let cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.jwt = result.getIdToken().getJwtToken();
        this.routesService.goToHome();
      },
      onFailure: (err) => {
        console.log(err);
      }
    });
  }
}
