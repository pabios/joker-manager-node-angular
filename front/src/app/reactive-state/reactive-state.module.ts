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
    NzButtonModule
  ],
  providers:[
    StateService
  ]
})
export class ReactiveStateModule { }
