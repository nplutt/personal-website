import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserService {

  public userModel: UserModel = new UserModel();

  signedIn(): boolean {
    return this.userModel.jwt !== null;
  }

  signOut(): void {
    this.userModel = new UserModel();
  }
}
