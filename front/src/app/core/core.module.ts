import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
