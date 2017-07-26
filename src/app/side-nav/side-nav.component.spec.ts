import {TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import { UserService } from '../services/user/user.service';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

export class RoutesServiceStub {
  goToSignIn(): void { }
  goToSignUp(): void { }
}

export class UserServiceStub {
  signedIn(): void { }
  signOut(): void { }
}

describe('SideNavComponent', () => {
  let routesService, userService;
  let comp: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        SideNavComponent
      ],
      providers: [
        { provide: RoutesService, useClass: RoutesServiceStub },
        { provide: UserService, useClass: UserServiceStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    routesService = injector.get(RoutesService);
    userService = injector.get(UserService);
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(SideNavComponent);
    comp = fixture.componentInstance;
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
