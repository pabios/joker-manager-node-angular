import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";

const routes: Routes =[
  // {path: 'about',component:AboutComponent},
  // { path: '', component: AboutComponent },

  { path: 'about/:articleName', component: AboutComponent },
  { path: '', redirectTo: 'about/Articles', pathMatch: 'full' }, // Rediriger vers "about/Articles" par défaut
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
export class SpecPagesRoutingModule {

}
