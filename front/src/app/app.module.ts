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
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {SearchGlobalModule} from "./search-global/search-global.module";
import {NzListModule} from "ng-zorro-antd/list";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {ReactiveStateModule} from "./reactive-state/reactive-state.module";

registerLocaleData(fr);


@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
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
    ToastrModule.forRoot(), FormsModule, HttpClientModule, IconsProviderModule, NzLayoutModule, NzMenuModule, NzAvatarModule, SearchGlobalModule, NzListModule, NzButtonModule, NzSpaceModule, NzDrawerModule, ReactiveStateModule

  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR' },
    // httpInterceptorProviders

    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
