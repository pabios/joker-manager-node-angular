import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveStateModule} from "../reactive-state/reactive-state.module";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzResultModule} from "ng-zorro-antd/result";
import {BadgeModule} from "primeng/badge";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule,
        HttpClientModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        NzIconModule,
        NzModalModule,
        NzButtonModule,
        ReactiveStateModule,
        NzBadgeModule,
        NzCardModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzResultModule,
        BadgeModule
    ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
