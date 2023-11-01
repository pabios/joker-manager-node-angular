import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";
import {LandingPageRoutingModule} from "./landing-page.routing.module";
import {FiltreModule} from "../filtre/filtre.module";
import {ReactiveStateModule} from "../reactive-state/reactive-state.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";
import {NzListModule} from "ng-zorro-antd/list";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {CategoriesModule} from "../categories/categories.module";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        LandingPageRoutingModule,
        FiltreModule,
        ReactiveStateModule,
        NzIconModule,
        NzCardModule,
        NzCarouselModule,
        NzResultModule,
        NzButtonModule,
        NzAvatarModule,
        NzDividerModule,
        NzSwitchModule,
        FormsModule,
        NzListModule,
        NzSkeletonModule,
        CategoriesModule
    ],
  exports:[
    LandingPageComponent
  ]
})
export class LandingPageModule { }
