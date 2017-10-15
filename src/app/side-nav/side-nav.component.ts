import { Component, Input } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service';
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {

  @Input() private sidenav: MatSidenav;

  constructor(
    private routesService: RoutesService
  ) { }

  goToAbout(): void {
    this.routesService.goToAbout();
    this.sidenav.close();
  }

  goToPortfolio(): void {
    this.routesService.goToPortfolio();
    this.sidenav.close();
  }

  goToBlog(): void {
    this.routesService.goToBlog();
    this.sidenav.close();
  }
}
