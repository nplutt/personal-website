import { Injectable } from "@angular/core";
//noinspection TypeScriptCheckImport
import { CognitoUserPool } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";


@Injectable()
export class CognitoUtilService {

  public static _REGION = 'us-west-2';
  public static _USER_POOL_ID = 'us-west-2_CjUKKsjTD';
  public static _CLIENT_ID = '17n7b3rrrosjd7nttlcfp4a2m6';

  public static _POOL_DATA = {
    UserPoolId: CognitoUtilService._USER_POOL_ID,
    ClientId: CognitoUtilService._CLIENT_ID
  };

  getUserPool() {
    return new CognitoUserPool(CognitoUtilService._POOL_DATA)
  }
}
