import {TestBed, getTestBed} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RoutesService } from './routes.service';

export class RouterStub {
  public navigate(route: Array<String>): void { }
}

describe('RoutesService', () => {
  let router, service;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [
        RoutesService,
        { provide: Router, useClass: RouterStub }
      ]
    });
    let injector = getTestBed();
    router = injector.get(Router);
    service = injector.get(RoutesService);
  });

  describe('goToAbout', () => {
    it('Should call navigate with /about', () => {
        spyOn(router, 'navigate');
        service.goToAbout();
        expect(router.navigate).toHaveBeenCalledWith(['/about'])
    });
  });

  describe('goToPortfolio', () => {
    it('Should call navigate with /portfolio', () => {
      spyOn(router, 'navigate');
      service.goToPortfolio();
      expect(router.navigate).toHaveBeenCalledWith(['/portfolio'])
    });
  });

  describe('goToBlog', () => {
    it('Should go to /blog', () => {
      spyOn(router, 'navigate');
      service.goToBlog();
      expect(router.navigate).toHaveBeenCalledWith(['/blog']);
    });
  });
});
