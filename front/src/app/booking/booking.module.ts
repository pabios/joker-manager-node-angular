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
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzPopoverModule} from "ng-zorro-antd/popover";
// import {NzSpaceModule} from "ng-zorro-antd/space";
// import {NzTransitionPatchModule} from "ng-zorro-antd/core/transition-patch/transition-patch.module";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzCalendarModule} from "ng-zorro-antd/calendar";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDrawerModule} from "ng-zorro-antd/drawer";



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
    SharedModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzPageHeaderModule,
    NzPopoverModule,
    // NzSpaceModule,
    // NzTransitionPatchModule,
    NzWaveModule,
    NzCalendarModule,
    NzBadgeModule,
    NzSpaceModule,
    NzDrawerModule

  ],
  exports:[
    BookingAddComponent
  ]
})
export class BookingModule { }
