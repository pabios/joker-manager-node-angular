import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
