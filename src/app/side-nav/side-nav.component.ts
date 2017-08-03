import { Component } from '@angular/core';
import { RoutesService } from '../services/routes/routes.service';
import { UserService } from '../services/user/user.service';
import { TestService } from '../services/http/test.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent {

  constructor(
    private routesService: RoutesService,
    private userService: UserService,
    private testService: TestService
  ) { }

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

  muck(): void {
    this.testService.getVehicles();
  }
}
