import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CognitoSignInService } from '../../services/cognito/cognito-sign-in.service';
import { SignUpComponent } from "../sign-up/sign-up.component";

export class cognitoSignInServiceStub {
  signIn() { }
}

describe('SignInComponent', () => {
  let cognitoSignInService;
  let comp: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignInComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: CognitoSignInService, useClass: cognitoSignInServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    cognitoSignInService = injector.get(CognitoSignInService);
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(SignInComponent);
    comp = fixture.componentInstance;
  });

  describe('signIn', () => {
    it('Should call cognitoSignInService.signIn', () => {
      spyOn(cognitoSignInService, 'signIn');
      comp.signIn('email', 'password');
      expect(cognitoSignInService.signIn).toHaveBeenCalledWith('email', 'password');
    });
  })
});
