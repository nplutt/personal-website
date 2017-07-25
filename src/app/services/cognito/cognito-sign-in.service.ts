import { Injectable } from '@angular/core';
//noinspection TypeScriptCheckImport
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { RoutesService } from '../routes/routes.service';
import { UserService } from '../user/user.service';
import { CognitoUtilService } from './congito-util.service';
// import { SignInModel } from '../../models/sign-in.model';


@Injectable()
export class CognitoSignInService {

  constructor(
    private cognitoUtilService: CognitoUtilService,
    private routesService: RoutesService,
    private userService: UserService
  ) { }



  signIn(email: string, password: string) {
    let authenticationData = {
      Username: email,
      Password: password
    };
    let authenticationDetails = new AuthenticationDetails(authenticationData);

    let userData = {
      Username: email,
      Pool: this.cognitoUtilService.getUserPool()
    };
    let cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.userService.userModel.jwt = result.getIdToken().getJwtToken();
        this.routesService.goToHome();
      },
      onFailure: (err) => {
        console.log(err);
      }
    });
  }
}
