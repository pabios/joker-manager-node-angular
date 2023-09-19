import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {AuthModule} from "./auth/auth.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {SharedModule} from "./shared/shared.module";
import {httpInterceptorProviders} from "./core/interceptors";
import { MaintenceDayComponent } from './maitenance/maintence-day/maintence-day.component';
import {ToastrModule} from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MaintenceDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule,
    AuthModule,
    // NgbModule,
    GoogleMapsModule,
    SharedModule, //   le SharedModule
    ToastrModule.forRoot()

  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR' },
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
