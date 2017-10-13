import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTooltipModule } from '@angular/material'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CognitoSignUpService } from '../services/cognito/cognito-sign-up.service';
import { CognitoSignInService } from '../services/cognito/cognito-sign-in.service';
import { CognitoUtilService } from '../services/cognito/congito-util.service';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    CognitoSignInService,
    CognitoSignUpService,
    CognitoUtilService,
    UserService
  ]
})

export class UserModule { }
