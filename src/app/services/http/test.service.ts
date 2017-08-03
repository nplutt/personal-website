import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestService {
  constructor(private http: Http) { }

  getVehicles() {
    return this.http.get('/api')
      .subscribe(data => {
        console.log(data['results']);
      });
  }
}
