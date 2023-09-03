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
    FormComponent
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
    MatIconModule
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
    FormComponent
  ]
})
export class SharedModule { }

