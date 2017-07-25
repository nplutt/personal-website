import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class RoutesService {
  constructor(
    private router: Router
  ) { }

  goToHome(): void {
    this.router.navigate(['/home'])
  }

  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  goToConfirmation(email: string): void {
    const params: NavigationExtras = {
      queryParams: { 'email': email }
    };

    this.router.navigate(['/confirmation'], params);
  }
}
