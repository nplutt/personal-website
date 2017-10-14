import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'portfolio', component: HeaderComponent },
  { path: 'blog', component: HeaderComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
      // { enableTracing: true }  // This is for debugging only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
