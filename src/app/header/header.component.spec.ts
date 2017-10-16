import { TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

export class RoutesServiceStub {
  goToAbout(): void { }
  goToPortfolio(): void { }
  goToBlog(): void { }
}

describe('HeaderComponent', () => {
  let routesService;
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SideNavComponent,
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

  describe('goToAbout', () => {
    it('Should call routesService.goToAbout', () => {
      spyOn(routesService, 'goToAbout');
      comp.goToAbout();
      expect(routesService.goToAbout).toHaveBeenCalled();
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
