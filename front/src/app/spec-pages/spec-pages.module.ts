import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {SpecPagesRoutingModule} from "./spec-pages.routing.module";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SpecPagesRoutingModule,
    MatCardModule
  ],
  exports:[
    AboutComponent
  ]
})
export class SpecPagesModule { }
