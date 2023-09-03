import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ElementListComponent} from "./element-list/element-list.component";
import {ElementComponent} from "./element/element.component";
import {ElementAddComponent} from "./element-add/element-add.component";

const routes: Routes =[
  {path: 'list',component:ElementListComponent},
  {path: 'element',component:ElementComponent},
  {path: 'add',component:ElementAddComponent},
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
