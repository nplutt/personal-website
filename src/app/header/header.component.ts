import { Component, Input } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service'
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Input() private sidenav: MatSidenav;

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
