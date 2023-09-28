import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";
import {LandingPageRoutingModule} from "./landing-page.routing.module";
import {FiltreModule} from "../filtre/filtre.module";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        LandingPageRoutingModule,
        FiltreModule
    ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
