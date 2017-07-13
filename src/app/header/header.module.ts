import { MdButtonModule, MdIconModule } from '@angular/material'
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
