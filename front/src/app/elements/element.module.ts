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
import {ElementSingleComponent} from "./element-single/element-single.component";
import {ElementAddComponent} from "./element-add/element-add.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SharedModule} from "../shared/shared.module";
import {ElementComponent} from "./element/element.component";



@NgModule({
  declarations: [
    ElementAddComponent,
    ElementListComponent,
    ElementSingleComponent,
    ElementComponent,
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
    MatIconModule,
    MatButtonToggleModule,
    SharedModule,
  ],
  exports:[
    ElementAddComponent,
    ElementListComponent,
    ElementSingleComponent,
    ElementComponent,
  ]
})
export class ElementModule { }
