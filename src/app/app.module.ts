import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
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
import { PowerPipe } from './pipes/power/power.pipe';
import { PipelindromePipe } from './pipes/pipelindrome/pipelindrome.pipe';

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
    PowerPipe,
    PipelindromePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [RouteComponent]
})
export class AppModule { }
