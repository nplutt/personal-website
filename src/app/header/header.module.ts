import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

import { RoutesService } from '../services/routes/routes.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ],
  providers: [
    RoutesService
  ]
})

export class HeaderModule { }
