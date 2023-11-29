import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/element.module').then(m => m.ElementModule), data: { title: 'elements' } },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'reative', loadChildren: () => import('./reactive-state/reactive-state.module').then(m => m.ReactiveStateModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'profils', loadChildren: () => import('./pages/profils/profils.module').then(m => m.ProfilsModule) },
  { path: 'regions', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'search', loadChildren: () => import('./search-global/search-global.module').then(m => m.SearchGlobalModule) },
  { path: 'filtre', loadChildren: () => import('./filtre/filtre.module').then(m => m.FiltreModule) },
  { path: 'spec', loadChildren: () => import('./spec-pages/spec-pages.module').then(m => m.SpecPagesModule) },
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
  { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule), data: { title: 'home' } },

  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
