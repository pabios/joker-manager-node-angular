import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BookingAddComponent} from "./booking-add/booking-add.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes =[
  // {path: 'add',component:BookingAddComponent},
  {path: ':id', component: BookingAddComponent,canActivate:[AuthGuard]}
]
@NgModule(
  {
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class BookingRoutingModule {

}
