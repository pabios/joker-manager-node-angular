import {NgModule, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pub } from './pub';
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  { path: '', component: Pub },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubRoutingModule {
}
