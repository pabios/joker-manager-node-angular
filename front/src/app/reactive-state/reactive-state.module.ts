import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveStateRoutingModule } from './reactive-state-routing.module';
import { StateListComponent } from './components/state-list/state-list.component';
import { SingleStateComponent } from './components/single-state/single-state.component';
import {StateService} from "./services/state-service";
import {SharedModule} from "../shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {ElementModule} from "../elements/element.module";
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent, CarouselItemComponent
} from "@coreui/angular";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzButtonModule} from "ng-zorro-antd/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzEmptyModule} from "ng-zorro-antd/empty";


@NgModule({
    declarations: [
        StateListComponent,
        SingleStateComponent
    ],
  imports: [
    CommonModule,
    ReactiveStateRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatLineModule,
    ElementModule,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    NzDrawerModule,
    NzButtonModule,
    MatDatepickerModule,
    FormsModule,
    NzCardModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzSelectModule,
    NzResultModule,
    NzProgressModule,
    NzEmptyModule
  ],
    exports: [
        StateListComponent
    ],
    providers: [
        StateService
    ]
})
export class ReactiveStateModule { }
