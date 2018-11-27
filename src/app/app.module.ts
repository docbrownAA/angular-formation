import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeJa);

import { AppComponent } from './components/base/app.component';
import { PlanComponent } from './components/plan/plan.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { RouteComponent } from './components/route/route.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { LocaleComponent } from './components/locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PresentationComponent,
    Exo1Component,
    RouteComponent,
    NotFoundComponent,
    PipeComponent,
    DirectiveComponent,
    CustomPipeComponent,
    LocaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RouteComponent]
})
export class AppModule { }
