import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'confirmation', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }  // This is for debugging only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
