import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingAddComponent } from './booking-add/booking-add.component';
import {BookingRoutingModule} from "./booking.routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatIconModule} from "@angular/material/icon";
import {CarouselModule} from "@coreui/angular";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    BookingAddComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,

    //
    MatCardModule,
    MatGridListModule,
    GoogleMapsModule,
    MatIconModule,
    CarouselModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonToggleModule,
    SharedModule

  ]
})
export class BookingModule { }
