import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ElementListComponent} from "./element-list/element-list.component";
import {ElementSingleComponent} from "./element-single/element-single.component";
import {ElementAddComponent} from "./element-add/element-add.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes =[
  {path: 'add',component:ElementAddComponent,canActivate:[AuthGuard]},
  {path: 'list',component:ElementListComponent},
  { path: 'list/:categoryId', component: ElementListComponent },
  { path: ':id', component: ElementSingleComponent },
  { path: '', component: ElementListComponent },

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
