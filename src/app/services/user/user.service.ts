import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserService {

  public userModel: UserModel = new UserModel();

}
