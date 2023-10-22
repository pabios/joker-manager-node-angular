import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilsComponent } from './profils.component';
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: '', component: ProfilsComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilsRoutingModule  {
}
