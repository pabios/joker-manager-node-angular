import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    NgbModule,
    MatIconModule,
    GoogleMapsModule,
    SharedModule //   le SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
