import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element/element.component';
import {ElementRoutingModule} from "./element.routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    ElementComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    ElementComponent
  ]
})
export class ElementModule { }
