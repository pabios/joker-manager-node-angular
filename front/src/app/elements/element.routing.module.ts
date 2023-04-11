import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ElementListComponent} from "./element-list/element-list.component";
import {ElementComponent} from "./element/element.component";

const routes: Routes =[
  {path: 'list',component:ElementListComponent},
  {path: 'element',component:ElementComponent},
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
export class ElementRoutingModule {

}
