import { MdButtonModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MdButtonModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ]
})

export class UserModule { }
