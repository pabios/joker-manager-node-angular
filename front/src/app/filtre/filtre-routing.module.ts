import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FiltreComponent} from "./filtre/filtre.component";

const routes: Routes = [
  { path: '', component: FiltreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltreRoutingModule { }
