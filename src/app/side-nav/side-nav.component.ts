import { Component } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {

  constructor(
    private routesService: RoutesService
  ) { }

  goToSignIn(): void {
    this.routesService.goToSignIn();
  }

  goToSignUp(): void {
    this.routesService.goToSignUp();
  }

}
