import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CognitoService } from '../../services/cognito/cognito.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { UserService } from '../../services/user/user.service';

export class CognitoServiceStub {
  signUp() { }
  confirmRegistration() { }
}

export class RouterStub {
  public url = null;
}

export class UserServiceStub {
  passwordsMatch() { }
}

describe('SignUpComponent', () => {
  let cognitoService, router, userService;
  let comp: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        SignUpComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: CognitoService, useClass: CognitoServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: UserService, useClass: UserServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    cognitoService = injector.get(CognitoService);
    router = injector.get(Router);
    userService = injector.get(UserService);
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(SignUpComponent);
    comp = fixture.componentInstance;
  });

  describe('emailFormControl', () => {
    it('Invalid email should throw pattern error', () => {
      comp.emailFormControl.setValue('not an email');
      expect(comp.emailFormControl.getError('pattern')).toBeTruthy();
    });

    it('Invalid email should not throw pattern error', () => {
      comp.emailFormControl.setValue('nplutt@gmail.com');
      expect(comp.emailFormControl.getError('pattern')).toBeFalsy();
    });

    it('No email string should throw required error', () => {
      expect(comp.emailFormControl.getError('required')).toBeTruthy();
    });

    it('Email string should not throw required error', () => {
      comp.emailFormControl.setValue('nplutt@gmail.com');
      expect(comp.emailFormControl.getError('required')).toBeFalsy();
    });
  });

  describe('passwordFormControl', () => {
    it('Invalid password should throw pattern error', () => {
      comp.passwordFormControl.setValue('Test1234');
      expect(comp.passwordFormControl.getError('pattern')).toBeTruthy();
    });

    it('Invalid password should not throw pattern error', () => {
      comp.passwordFormControl.setValue('Test123$');
      expect(comp.passwordFormControl.getError('pattern')).toBeFalsy();
    });

    it('No password string should throw required error', () => {
      expect(comp.passwordFormControl.getError('required')).toBeTruthy();
    });

    it('Password string should not throw required error', () => {
      comp.passwordFormControl.setValue('Test123$');
      expect(comp.passwordFormControl.getError('required')).toBeFalsy();
    });
  });

  describe('displayConfirmPasswordError', () => {
    it('Returns false when passwordMatch is true', () => {
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.passwordConfirmFormControl.setValue('Test123$');
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError()).toBeFalsy();
    });

    it('Returns false when errors are not null', () => {
      spyOn(userService, 'passwordsMatch').and.returnValue(false);
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError()).toBeFalsy();
    });

    it('Returns false when touched is not true', () => {
      spyOn(userService, 'passwordsMatch').and.returnValue(false);
      comp.passwordConfirmFormControl.setValue('Test123$');
      expect(comp.displayConfirmPasswordError()).toBeFalsy();
    });

    it('Returns true when passwordMatch is false', () => {
      spyOn(userService, 'passwordsMatch').and.returnValue(false);
      comp.passwordConfirmFormControl.setValue('Test123$');
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError()).toBeTruthy();
    });
  });

  describe('valiodSigUpForm', () => {
    it('Should return true when all values are correct', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm()).toBeTruthy();
    });

    it('Should return false when passwordFormControl is not dirty', () => {
      comp.passwordFormControl.setValue('Test123$');
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm()).toBeFalsy();
    });

    it('Should return false when passwordFromControl has an error', () => {
      comp.passwordFormControl.markAsDirty();
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm()).toBeFalsy();
    });

    it('Should return false when passwordMatch returns false', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      spyOn(userService, 'passwordsMatch').and.returnValue(false);
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm()).toBeFalsy();
    });

    it('Should return false when emailFormControl is not dirty', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm()).toBeFalsy();
    });

    it('Should return false when emailFormControl has an error', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      spyOn(userService, 'passwordsMatch').and.returnValue(true);
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('not an email');

      expect(comp.validSignUpForm()).toBeFalsy();
    });
  });

  describe('signUp', () => {
    it('Should call cognitoService.signUp', () => {
      spyOn(cognitoService, 'signUp');
      comp.signUp();
      expect(cognitoService.signUp).toHaveBeenCalled();
    });
  });

  describe('confirm', () => {
    it('Should call cognitoService.confirmRegistration', () => {
      spyOn(cognitoService, 'confirmRegistration');
      comp.confirm();
      expect(cognitoService.confirmRegistration).toHaveBeenCalled();
    });
  });

  describe('routeAtSignUp', () => {
    it('Should return false when not at route', () => {
      expect(comp.routeAtSignUp()).toBeFalsy();
    });

    it('Should return true when at route', () => {
      router.url = '/sign-up';
      expect(comp.routeAtSignUp()).toBeTruthy();
    });
  });
});
