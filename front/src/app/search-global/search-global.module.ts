import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchGlobalRoutingModule } from './search-global-routing.module';
import { SearchGlobalComponent } from './search-global/search-global.component';
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    SearchGlobalComponent
  ],
  exports: [
    SearchGlobalComponent
  ],
  imports: [
    CommonModule,
    SearchGlobalRoutingModule,
    NzAutocompleteModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule
  ]
})
export class SearchGlobalModule { }
