import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutesService {
  constructor(
    private router: Router
  ) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  goToBlog(): void {
    this.router.navigate(['/blog']);
  }
}
