import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MaintenceDayComponent} from "../maitenance/maintence-day/maintence-day.component";

const routes: Routes =[
  {path: '',component:MaintenceDayComponent},
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
export class MaintenanceRoutingModule {

}
