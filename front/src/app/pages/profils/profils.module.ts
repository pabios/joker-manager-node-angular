import { NgModule } from '@angular/core';

import { ProfilsRoutingModule } from './profils-routing.module';

import { ProfilsComponent } from './profils.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {MatCardModule} from "@angular/material/card";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzAvatarModule} from "ng-zorro-antd/avatar";


@NgModule({
    imports: [ProfilsRoutingModule, NzListModule, NzDrawerModule, NzDescriptionsModule, NzDividerModule, NzIconModule, NzProgressModule, NzResultModule, NzButtonModule, NzBadgeModule, NzCardModule, NzTableModule, NgForOf, NzPageHeaderModule, NzSpaceModule, NzPopconfirmModule, NgIf, MatCardModule, AsyncPipe, NzAlertModule, NzAvatarModule],
  declarations: [ProfilsComponent],
  exports: [ProfilsComponent]
})
export class ProfilsModule { }
