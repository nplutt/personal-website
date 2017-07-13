import { MdButtonModule } from '@angular/material'
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MdButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
