import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list/element-list.component';
import {ElementRoutingModule} from "./element.routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatIconModule} from "@angular/material/icon";
import {CarouselModule} from "@coreui/angular";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ElementComponent} from "./element/element.component";



@NgModule({
  declarations: [
    ElementListComponent,
    ElementComponent
  ],
  imports: [
    CommonModule,
    ElementRoutingModule,
    MatCardModule,
    MatGridListModule,
    GoogleMapsModule,
    MatIconModule,
    CarouselModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports:[
    ElementListComponent,
    ElementComponent
  ]
})
export class ElementModule { }
