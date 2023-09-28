import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchGlobalComponent} from "./search-global/search-global.component";

const routes: Routes = [
  { path: '', component: SearchGlobalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGlobalRoutingModule { }
