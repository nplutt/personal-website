import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdTooltipModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CognitoService } from '../services/cognito/cognito.service';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdTooltipModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    CognitoService,
    UserService
  ]
})

export class UserModule { }
