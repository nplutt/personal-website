import { MdButtonModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MdButtonModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule { }
