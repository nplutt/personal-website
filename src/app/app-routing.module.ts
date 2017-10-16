import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component"
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  // { path: 'hello', redirectTo: ''}
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
