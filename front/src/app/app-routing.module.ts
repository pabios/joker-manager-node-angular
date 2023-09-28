import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/element.module').then(m => m.ElementModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'reative', loadChildren: () => import('./reactive-state/reactive-state.module').then(m => m.ReactiveStateModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'profils', loadChildren: () => import('./pages/profils/profils.module').then(m => m.ProfilsModule) },
  { path: 'search', loadChildren: () => import('./search-global/search-global.module').then(m => m.SearchGlobalModule) },
  { path: 'filtre', loadChildren: () => import('./filtre/filtre.module').then(m => m.FiltreModule) },
  { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },

  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
