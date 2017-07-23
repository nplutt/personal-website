// import { TestBed, getTestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { CognitoService } from './cognito.service';
// import { RoutesService } from '../routes/routes.service';
// import { UserService } from '../user/user.service';
// import { SignUpModel } from '../../models/sign-up.model';
// //noinspection TypeScriptCheckImport
// import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
// import any = jasmine.any;
//
// export class CognitoUserPoolStub {
//   constructor(poolData: any = null) { }
//   public signUp(username: string, password: string, userAttributes: any, validationData: any, callback: any) {}
// }
//
// export class RouterStub {
//   public parseUrl(url: string) {
//     return { queryParams: { email: 'nplutt@gmail.com'} }
//   }
// }
//
// export class RoutesServiceStub {
//   public goToConfirmation(email: string) { }
//   public goToSignIn() { }
// }
//
// export class UserServiceStub {
//   public signUpModel = new SignUpModel();
// }
//
// describe('CognitoService', () => {
//   let cognitoUserPool, service;
//
//   beforeEach(()=> {
//     TestBed.configureTestingModule({
//       providers: [
//         CognitoService,
//         { provide: CognitoUserPool, useValue: new CognitoUserPoolStub() },
//         { provide: Router, useClass: RouterStub },
//         { provide: RoutesService, useClass: RoutesServiceStub },
//         { provide: UserService, useClass: UserServiceStub }
//       ]
//     });
//
//     let injector = getTestBed();
//     cognitoUserPool = injector.get(CognitoUserPool);
//     service = injector.get(CognitoService);
//   });
//
//   describe('signUp', () => {
//     it('Should call signUp correctly', () => {
//       const user: SignUpModel = new SignUpModel('nplutt@gmail.com', 'Test123$');
//       const attributeList = [{Name: 'email', Value: 'nplutt@gmail.com'}];
//       spyOn(cognitoUserPool, 'signUp');
//       service.signUp(user);
//       expect(cognitoUserPool.signUp).toHaveBeenCalledWith(user.email, user.password, attributeList, null, any);
//     });
//   });
// });
