import { MdButtonModule, MdIconModule, MdSidenavModule } from '@angular/material'
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    MdButtonModule,
    MdIconModule,
    MdSidenavModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})

export class HeaderModule { }
