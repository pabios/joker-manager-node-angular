import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { FormComponent } from './form/form.component';
import { FormBookingComponent } from './form-booking/form-booking.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserModule} from "@angular/platform-browser";
import {MatNativeDateModule} from "@angular/material/core";
import {ElementModule} from "../elements/element.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzPopoverModule} from "ng-zorro-antd/popover";
// import {NzSpaceModule} from "ng-zorro-antd/space";
// import {NzTransitionPatchModule} from "ng-zorro-antd/core/transition-patch/transition-patch.module";
// import {NzWaveModule} from "ng-zorro-antd/core/wave";



// @NgModule({
//   declarations: [
//     FormComponent
//   ],
//   imports: [
//     CommonModule
//   ],
//     exports: [
//         MatToolbarModule,// bizare mais on l'exporte sans l'importer
//         MatCardModule,
//         ReactiveFormsModule,
//         MatButtonModule,
//         MatRadioModule,
//         MatFormFieldModule,
//         MatInputModule,
//         MatSelectModule,
//         MatIconModule,
//         FormComponent
//     ]
// })
// export class SharedModule { }

@NgModule({
  declarations: [
    FormComponent,
    FormBookingComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        // BrowserModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NzButtonModule,
        NzDescriptionsModule,
        NzPageHeaderModule,
        NzPopoverModule,
        // NzSpaceModule,
        // NzTransitionPatchModule,
        // NzWaveModule,
    ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormComponent,
    FormBookingComponent,
  ]
})
export class SharedModule { }

