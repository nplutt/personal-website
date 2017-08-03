import { TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import { UserService } from '../services/user/user.service';
import { TestService } from '../services/http/test.service';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

export class RoutesServiceStub {
  goToSignIn(): void { }
  goToSignUp(): void { }
}

export class UserServiceStub {
  signedIn(): void { }
  signOut(): void { }
}

describe('HeaderComponent', () => {
  let routesService, userService;
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SideNavComponent,
      ],
      providers: [
        { provide: RoutesService, useClass: RoutesServiceStub },
        { provide: UserService, useClass: UserServiceStub },
        { provide: TestService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    routesService = injector.get(RoutesService);
    userService = injector.get(UserService);
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
  });

  describe('showButtons', () => {
    it('Should return true if width is > 580', () => {
      comp.width = 600;
      expect(comp.showButtons()).toBeTruthy();
    });

    it('Should return false if width is < 580', () => {
      comp.width = 580;
      expect(comp.showButtons()).toBeFalsy();
    });
  });

  describe('goToSignUp', () => {
    it('Should call routesService.goToSignUp', () => {
      spyOn(routesService, 'goToSignUp');
      comp.goToSignUp();
      expect(routesService.goToSignUp).toHaveBeenCalled();
    });
  });

  describe('goToSignIn', () => {
    it('Should call routesService.goToSignIn', () => {
      spyOn(routesService, 'goToSignIn');
      comp.goToSignIn();
      expect(routesService.goToSignIn).toHaveBeenCalled();
    });
  });

  describe('signedIn', () => {
    it('Should call userService.signedIn', () => {
      spyOn(userService, 'signedIn').and.returnValue(false);
      expect(comp.signedIn()).toBeFalsy();
    });
  });

  describe('signOut', () => {
    it('Should call userService.signOut', () => {
      spyOn(userService, 'signOut');
      comp.signOut();
      expect(userService.signOut).toHaveBeenCalled();
    });
  });
});
