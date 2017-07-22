import {TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

export class RoutesServiceStub {
  goToSignIn(): void { }
  goToSignUp(): void { }
}

describe('SideNavComponent', () => {
  let routesService;
  let comp: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        SideNavComponent
      ],
      providers: [
        { provide: RoutesService, useClass: RoutesServiceStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    routesService = injector.get(RoutesService);
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
});
