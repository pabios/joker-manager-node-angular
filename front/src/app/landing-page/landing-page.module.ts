import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";
import {LandingPageRoutingModule} from "./landing-page.routing.module";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    LandingPageRoutingModule
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
