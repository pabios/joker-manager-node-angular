import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ElementAddComponent} from "../elements/element-add/element-add.component";
import {ElementListComponent} from "../elements/element-list/element-list.component";
import {ElementSingleComponent} from "../elements/element-single/element-single.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes =[
  {path: 'add',component:ElementAddComponent},
  {path: 'list',component:ElementListComponent},
  { path: 'list/:categoryId', component: ElementListComponent },
  { path: ':id', component: ElementSingleComponent },
  { path: '', component: WelcomeComponent },
  // { path: '', component: ElementListComponent },

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
