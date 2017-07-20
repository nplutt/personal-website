import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutesService {
  constructor(
    private router: Router
  ) { }

  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
