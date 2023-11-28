import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { SendFormComponent } from './send-form/send-form.component';
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzResultModule} from "ng-zorro-antd/result";
import {RouterLink} from "@angular/router";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {ButtonModule} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {BadgeModule} from "primeng/badge";
import {CardModule} from "primeng/card";
import {MultiSelectModule} from "primeng/multiselect";
import {FieldsetModule} from "primeng/fieldset";
import {ToastModule} from "primeng/toast";
import {ConfirmPopupModule} from "primeng/confirmpopup";
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
    FormBookingComponent,
    SendFormComponent
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
    NzCommentModule,
    NzFormModule,
    NzAvatarModule,
    FormsModule,
    NzInputModule,
    NzResultModule,
    RouterLink,
    NzUploadModule,
    NzIconModule,
    NzProgressModule,
    ButtonModule,
    MessagesModule,
    ProgressSpinnerModule,
    BadgeModule,
    CardModule,
    MultiSelectModule,
    FieldsetModule,
    ToastModule,
    ConfirmPopupModule,
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
    SendFormComponent,
  ]
})
export class SharedModule { }

