import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'nimba', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: '**', redirectTo: 'blog'}
  { path: 'elements', loadChildren: () => import('./elements/element.module').then(m => m.ElementModule) },

  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
