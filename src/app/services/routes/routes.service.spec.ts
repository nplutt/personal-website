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

  describe('goToSignIn', () => {
    it('Should call navigate with /sign-in', () => {
        spyOn(router, 'navigate');
        service.goToSignIn();
        expect(router.navigate).toHaveBeenCalledWith(['/sign-in'])
    });
  });

  describe('goToSignUp', () => {
    it('Should call navigate with /sign-up', () => {
      spyOn(router, 'navigate');
      service.goToSignUp();
      expect(router.navigate).toHaveBeenCalledWith(['/sign-up'])
    });
  });

  describe('goToConfirmation', () => {
    it('Should go to /confirmation?email=muck', () => {
      spyOn(router, 'navigate');
      service.goToConfirmation('muck');
      expect(router.navigate).toHaveBeenCalledWith(['/confirmation'], {'queryParams': {'email': 'muck'}});
    });
  });
});
