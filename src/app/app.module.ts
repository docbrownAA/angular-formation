import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/base/app.component';
import { PlanComponent } from './components/plan/plan.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { RouteComponent } from './components/route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PresentationComponent,
    Exo1Component,
    RouteComponent
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
