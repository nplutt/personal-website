import {TestBed, getTestBed} from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ]
    });
    let injector = getTestBed();
    service = injector.get(UserService);
  });

  describe('signedIn', () => {
    it('Should return true when jwt is not null', () => {
      service.userModel.jwt = 'my jwt';
      expect(service.signedIn()).toBeTruthy();
    });

    it('Should return false when jwt is null', () => {
      service.userModel.jwt = null;
      expect(service.signedIn()).toBeFalsy();
    });
  });

  describe('signOut', () => {
    it('Should set the jwt to be null', () => {
      service.userModel.jwt = 'my jwt';
      service.signOut();
      expect(service.userModel.jwt).toBeNull();
    });
  });
});
