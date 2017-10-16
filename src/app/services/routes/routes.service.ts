import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutesService {
  constructor(
    private router: Router
  ) { }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  goToBlog(): void {
    this.router.navigate(['/blog']);
  }

  goToAbout(): void {
    this.router.navigate(['/about'])
  }
}
