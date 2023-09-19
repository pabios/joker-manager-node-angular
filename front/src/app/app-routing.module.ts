import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'elements', loadChildren: () => import('./elements/element.module').then(m => m.ElementModule) },
  { path: 'maintenance', loadChildren: () => import('./maintenace/maintenace.module').then(m => m.MaintenaceModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: '', component: LandingPageComponent },

  //maintenace
  // { path: 'maintenance', loadChildren: () => import('./maintenace/maintenace.module').then(m => m.MaintenaceModule) },
  // { path: '**', pathMatch: 'full', redirectTo: 'maintenance' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
