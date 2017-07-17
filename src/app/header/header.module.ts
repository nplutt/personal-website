import { MdButtonModule, MdIconModule, MdListModule, MdSidenavModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})

export class HeaderModule { }
