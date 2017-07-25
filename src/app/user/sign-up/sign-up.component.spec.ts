import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CognitoSignUpService } from '../../services/cognito/cognito-sign-up.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

export class cognitoSignUpServiceStub {
  signUp() { }
  confirmRegistration() { }
}

export class RouterStub {
  public url = null;
}

describe('SignUpComponent', () => {
  let cognitoSignUpService, router;
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
        { provide: CognitoSignUpService, useClass: cognitoSignUpServiceStub },
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    cognitoSignUpService = injector.get(CognitoSignUpService);
    router = injector.get(Router);
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
      comp.passwordConfirmFormControl.setValue('Test123$');
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError('Test123$', 'Test123$')).toBeFalsy();
    });

    it('Returns false when errors are not null', () => {
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError('Test123$', '')).toBeFalsy();
    });

    it('Returns false when touched is not true', () => {
      comp.passwordConfirmFormControl.setValue('Test123$');
      expect(comp.displayConfirmPasswordError('Test123$', '')).toBeFalsy();
    });

    it('Returns true when passwordMatch is false', () => {
      comp.passwordConfirmFormControl.setValue('Test123$');
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError('Test123$', '')).toBeTruthy();
    });
  });

  describe('valiodSigUpForm', () => {
    it('Should return true when all values are correct', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm('Test123$', 'Test123$')).toBeTruthy();
    });

    it('Should return false when passwordFormControl is not dirty', () => {
      comp.passwordFormControl.setValue('Test123$');
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm('Test123$', 'Test123$')).toBeFalsy();
    });

    it('Should return false when passwordFromControl has an error', () => {
      comp.passwordFormControl.markAsDirty();
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm('Test123$', 'Test123$')).toBeFalsy();
    });

    it('Should return false when passwordMatch returns false', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm('Test123$', '')).toBeFalsy();
    });

    it('Should return false when emailFormControl is not dirty', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      comp.emailFormControl.setValue('nplutt@gmail.com');

      expect(comp.validSignUpForm('Test123$', 'Test123$')).toBeFalsy();
    });

    it('Should return false when emailFormControl has an error', () => {
      comp.passwordFormControl.markAsDirty();
      comp.passwordFormControl.setValue('Test123$');
      comp.emailFormControl.markAsDirty();
      comp.emailFormControl.setValue('not an email');

      expect(comp.validSignUpForm('Test123$', 'Test123$')).toBeFalsy();
    });
  });

  describe('signUp', () => {
    it('Should call cognitoSignUpService.signUp', () => {
      spyOn(cognitoSignUpService, 'signUp');
      comp.signUp('', '');
      expect(cognitoSignUpService.signUp).toHaveBeenCalled();
    });
  });

  describe('confirm', () => {
    it('Should call cognitoSignUpService.confirmRegistration', () => {
      spyOn(cognitoSignUpService, 'confirmRegistration');
      comp.confirm('');
      expect(cognitoSignUpService.confirmRegistration).toHaveBeenCalled();
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
