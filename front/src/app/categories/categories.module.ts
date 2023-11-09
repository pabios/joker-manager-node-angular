import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import {CategoriesComponent} from "./categories/categories.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {ButtonModule} from "primeng/button";
import {TagModule} from "primeng/tag";
import {SplitButtonModule} from "primeng/splitbutton";


@NgModule({
  declarations: [CategoriesComponent],
  exports: [
    CategoriesComponent
  ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        NzCardModule,
        NzAvatarModule,
        NzIconModule,
        NzLayoutModule,
        NzPageHeaderModule,
        ButtonModule,
        TagModule,
        SplitButtonModule
    ]
})
export class CategoriesModule { }
