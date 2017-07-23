import { Injectable } from '@angular/core';
import { SignUpModel } from '../../models/sign-up.model';
import { SignInModel } from "../../models/sign-in.model";

@Injectable()
export class UserService {

  public signUpModel: SignUpModel;
  public signInModel: SignInModel;

  constructor() {
    this.resetSignUpModel();
    this.resetSignInModel();
  }

  resetSignUpModel(): void {
    this.signUpModel = new SignUpModel();
  }

  resetSignInModel(): void {
    this.signInModel = new SignInModel();
  }

  passwordsMatch(): boolean {
    return this.signUpModel.password === this.signUpModel.confirmPassword;
  }
}
