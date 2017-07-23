import { Injectable } from '@angular/core';
import { SignUpModel } from '../../models/sign-up.model';

@Injectable()
export class UserService {

  public signUpModel: SignUpModel;

  constructor() {
    this.resetSignUpModel()
  }

  resetSignUpModel(): void {
    this.signUpModel = new SignUpModel();
  }

  passwordsMatch(): boolean {
    return this.signUpModel.password === this.signUpModel.confirmPassword;
  }
}
