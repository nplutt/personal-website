import { Component } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {

  constructor(
    private routesService: RoutesService
  ) { }

  goToHome(): void {
    this.routesService.goToHome();
  }

  goToPortfolio(): void {
    this.routesService.goToPortfolio();
  }

  goToBlog(): void {
    this.routesService.goToBlog();
  }
}
