import { TestBed, inject, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RoutesService } from './routes.service';

export class RouterStub {
  public navigate(route: Array<String>): void { }
}

describe('RoutesService', () => {
  let service: RoutesService;
  let router: Router;

  beforeEach(async(()=> {
    TestBed.configureTestingModule({
      providers: [
        RoutesService,
        { provide: Router, useFactory: RouterStub }
      ]
    }).compileComponents();
  }));

  describe('goToSignIn', () => {
    // it('Should call navigate with /sign-in', inject([Router], (router) => {
    //   spyOn(router, 'navigate');
    //   service.goToSignIn();
    //   expect(router.navigate).toHaveBeenCalledWith(['/sign-in']);
    // }));
    it('Should call navigate with /sign-in', () => {
        spyOn(router, 'navigate');
        service.goToSignIn();
        expect(router.navigate).toHaveBeenCalledWith(['/sign-in'])
    });
  });
});
