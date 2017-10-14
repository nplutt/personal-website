import {TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

export class RoutesServiceStub {
  goToHome(): void { }
  goToPortfolio(): void { }
  goToBlog(): void { }
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
        { provide: RoutesService, useClass: RoutesServiceStub }
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

  describe('goToHome', () => {
    it('Should call routesService.goToHome', () => {
      spyOn(routesService, 'goToHome');
      comp.goToHome();
      expect(routesService.goToHome).toHaveBeenCalled();
    });
  });

  describe('goToPortfolio', () => {
    it('Should call routesService.goToPortfolio', () => {
      spyOn(routesService, 'goToPortfolio');
      comp.goToPortfolio();
      expect(routesService.goToPortfolio).toHaveBeenCalled();
    });
  });

  describe('goToBlog', () => {
    it('Should call routesService.goToBlog', () => {
      spyOn(routesService, 'goToBlog');
      comp.goToBlog();
      expect(routesService.goToBlog).toHaveBeenCalled();
    });
  });
});
