import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltreRoutingModule } from './filtre-routing.module';
import { FiltreComponent } from './filtre/filtre.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";


@NgModule({
  declarations: [
    FiltreComponent
  ],
  exports: [
    FiltreComponent
  ],
  imports: [
    CommonModule,
    FiltreRoutingModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzIconModule,
    NzCardModule
  ]
})
export class FiltreModule { }
