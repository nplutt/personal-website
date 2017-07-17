import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public width: number;

  constructor() {
    this.width = window.screen.width;
  }

  showButtons(): boolean {
    return this.width > 580;
  }
}
