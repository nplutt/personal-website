import { Component } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service'
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public width: number;

  constructor(
    private routesService: RoutesService,
    private userService: UserService
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

  signedIn(): boolean {
    return this.userService.signedIn();
  }

  signOut(): void {
    this.userService.signOut();
  }
}
