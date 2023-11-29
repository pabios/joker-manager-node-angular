import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {SpecPagesRoutingModule} from "./spec-pages.routing.module";
import {MatCardModule} from "@angular/material/card";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";



@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        SpecPagesRoutingModule,
        MatCardModule,
        NzCardModule,
        NzAvatarModule,
        NzResultModule,
        NzPageHeaderModule
    ],
  exports:[
    AboutComponent
  ]
})
export class SpecPagesModule { }
