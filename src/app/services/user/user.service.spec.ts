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

  describe('resetSignUpModel', () => {
    it('Should reset model values', () => {
      service.signUpModel.confirmPassword = 'balh';
      service.resetSignUpModel();
      expect(service.signUpModel.confirmPassword).toBeNull();
    });
  });

  describe('passwordsMatch', () => {
    it('Should return false if passwords do not match', () => {
      service.signUpModel.password = ' ';
      service.signUpModel.confirmPassword = '';
      expect(service.passwordsMatch()).toBeFalsy();
    });

    it('Should return true if passwords match', () => {
      service.signUpModel.password = '';
      service.signUpModel.confirmPassword = '';
      expect(service.passwordsMatch()).toBeTruthy();
    });
  });
});
