import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormsModule} from "@angular/forms";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzModalModule} from "ng-zorro-antd/modal";
import {SharedModule} from "../shared/shared.module";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzResultModule} from "ng-zorro-antd/result";


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NzListModule,
    NzCommentModule,
    NzFormModule,
    NzAvatarModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    NzCardModule,
    NzModalModule,
    SharedModule,
    NzSkeletonModule,
    NzResultModule
  ]
})
export class ChatModule { }
