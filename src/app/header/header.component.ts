import { Component } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public width: number;

  constructor(
    private routesService: RoutesService,
  ) {
    this.width = window.screen.width;
  }

  showButtons(): boolean {
    return this.width > 580;
  }

  goToPortfolio(): void {
    this.routesService.goToPortfolio();
  }

  goToBlog(): void {
    this.routesService.goToBlog();
  }

  goToAbout(): void {
    this.routesService.goToAbout();
  }
}
