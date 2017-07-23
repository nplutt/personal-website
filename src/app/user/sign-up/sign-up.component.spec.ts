import {TestBed, getTestBed, ComponentFixture, fakeAsync} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import { CognitoService } from '../../services/cognito/cognito.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { UserService } from '../../services/user/user.service';

export class UserServiceStub {
  passwordsMatch() { }
}

describe('SignUpComponent', () => {
  let userService;
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
        { provide: CognitoService },
        { provide: Router },
        { provide: UserService, useClass: UserServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
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
    it('Returns true when passwordMatch is false', () => {
      spyOn(userService, 'passwordsMatch').and.returnValue(false);
      comp.passwordConfirmFormControl.setValue('Test123$');
      comp.passwordConfirmFormControl.markAsTouched();
      expect(comp.displayConfirmPasswordError()).toBeTruthy();
    });

    it('Returns true when passwordConfirmContorl errors are null', () => {

    });
  });
});
