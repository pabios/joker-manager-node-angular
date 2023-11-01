import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzTimelineModule} from "ng-zorro-antd/timeline";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzOverflowModule} from "ng-zorro-antd/cdk/overflow";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {FormsModule} from "@angular/forms";
import {NzListModule} from "ng-zorro-antd/list";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzModalModule} from "ng-zorro-antd/modal";
import {FiltreModule} from "../filtre/filtre.module";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzDividerModule} from "ng-zorro-antd/divider";



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
    NzCarouselModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    NgOptimizedImage,
    NzGridModule,
    NzTimelineModule,
    NzBadgeModule,
    NzPaginationModule,
    NzLayoutModule,
    NzOverflowModule,
    NzImageModule,
    NzSliderModule,
    FormsModule,
    NzListModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzPopoverModule,
    NzTagModule,
    NzResultModule,
    NzModalModule,
    FiltreModule,
    NzStepsModule,
    NzDividerModule,
  ],
  exports:[
    ElementAddComponent,
    ElementListComponent,
    ElementSingleComponent,
    ElementComponent,
  ]
})
export class ElementModule { }
