import { Component } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public width: number;

  constructor(
    private routesService: RoutesService
  ) {
    this.width = window.screen.width;
  }

  showButtons(): boolean {
    return this.width > 580;
  }

  goToSignIn(): void {
    this.routesService.goToSignIn();
  }

  goToSignUp(): void {
    this.routesService.goToSignUp();
  }
}
