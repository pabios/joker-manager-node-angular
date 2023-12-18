import { NgModule } from '@angular/core';

import { PubRoutingModule } from './pub-routing.module';

import { Pub } from './pub';
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
import {AsyncPipe, DatePipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {MatCardModule} from "@angular/material/card";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {MessageModule} from "primeng/message";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {ConfirmPopupModule} from "primeng/confirmpopup";


@NgModule({
  imports: [PubRoutingModule, NzListModule, NzDrawerModule, NzDescriptionsModule, NzDividerModule, NzIconModule, NzProgressModule, NzResultModule, NzButtonModule, NzBadgeModule, NzCardModule, NzTableModule, NgForOf, NzPageHeaderModule, NzSpaceModule, NzPopconfirmModule, NgIf, MatCardModule, AsyncPipe, NzAlertModule, NzAvatarModule, CardModule, ButtonModule, CalendarModule, FormsModule, DatePipe, MessageModule, TagModule, ToastModule, ConfirmPopupModule, NgStyle],
  declarations: [Pub],
  exports: [Pub]
})
export class PubModule { }
