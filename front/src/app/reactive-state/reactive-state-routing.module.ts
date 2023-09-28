import {ChangeDetectionStrategy, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingleStateComponent} from "./components/single-state/single-state.component";
import {StateListComponent} from "./components/state-list/state-list.component";

const routes: Routes = [
  {path:'states',component: StateListComponent},
  {path:'states/:id',component: SingleStateComponent},
  {path:'',pathMatch:'full',redirectTo:'states'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveStateRoutingModule { }
