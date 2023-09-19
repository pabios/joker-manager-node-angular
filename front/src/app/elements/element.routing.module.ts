import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ElementListComponent} from "./element-list/element-list.component";
import {ElementSingleComponent} from "./element-single/element-single.component";
import {ElementAddComponent} from "./element-add/element-add.component";

const routes: Routes =[
  {path: 'add',component:ElementAddComponent},
  {path: 'list',component:ElementListComponent},
  {path: ':element',component:ElementSingleComponent},
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
