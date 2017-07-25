import {TestBed, getTestBed} from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service;

  beforeEach(()=> {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ]
    });
    let injector = getTestBed();
    service = injector.get(UserService);
  });

});
