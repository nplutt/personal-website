import { Injectable } from '@angular/core';
import { SignUpModel } from '../../models/sign-up.model';
import { SignInModel } from '../../models/sign-in.model';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserService {

  public signUpModel: SignUpModel;
  public signInModel: SignInModel;
  public userModel: UserModel;

  constructor() {
    this.resetSignUpModel();
    this.resetSignInModel();
    this.resetUserModel();
  }

  resetSignUpModel(): void {
    this.signUpModel = new SignUpModel();
  }

  resetSignInModel(): void {
    this.signInModel = new SignInModel();
  }

  resetUserModel(): void {
    this.userModel = new UserModel();
  }

  passwordsMatch(): boolean {
    return this.signUpModel.password === this.signUpModel.confirmPassword;
  }
}
