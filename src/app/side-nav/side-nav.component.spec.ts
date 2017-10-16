import {TestBed, ComponentFixture, getTestBed} from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { RoutesService } from '../services/routes/routes.service';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatSidenav } from "@angular/material";

export class MatSidenavStub {
  close(): void { }
}

export class RoutesServiceStub {
  goToAbout(): void { }
  goToPortfolio(): void { }
  goToBlog(): void { }
}

describe('SideNavComponent', () => {
  let routesService, sidenav;
  let comp: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [
        SideNavComponent
      ],
      providers: [
        { provide: RoutesService, useClass: RoutesServiceStub },
        { provide: MatSidenav, useClass: MatSidenavStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    let injector = getTestBed();
    routesService = injector.get(RoutesService);
    sidenav = injector.get(MatSidenav);
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(SideNavComponent);
    comp = fixture.componentInstance;
    comp.sidenav = sidenav;
  });

  describe('goToAbout', () => {
    it('Should call routesService.goToAbout', () => {
      spyOn(routesService, 'goToAbout');
      comp.goToAbout();
      expect(routesService.goToAbout).toHaveBeenCalled();
    });

    it('Should call sidenav.close', () => {
      spyOn(sidenav, 'close');
      comp.goToAbout();
      expect(sidenav.close).toHaveBeenCalled();
    });
  });

  describe('goToPortfolio', () => {
    it('Should call routesService.goToPortfolio', () => {
      spyOn(routesService, 'goToPortfolio');
      comp.goToPortfolio();
      expect(routesService.goToPortfolio).toHaveBeenCalled();
    });

    it('Should call sidenav.close', () => {
      spyOn(sidenav, 'close');
      comp.goToPortfolio();
      expect(sidenav.close).toHaveBeenCalled();
    });
  });

  describe('goToBlog', () => {
    it('Should call routesService.goToBlog', () => {
      spyOn(routesService, 'goToBlog');
      comp.goToBlog();
      expect(routesService.goToBlog).toHaveBeenCalled();
    });

    it('Should call sidenav.close', () => {
      spyOn(sidenav, 'close');
      comp.goToBlog();
      expect(sidenav.close).toHaveBeenCalled();
    });
  });
});
