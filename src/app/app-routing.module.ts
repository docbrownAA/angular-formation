import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './components/base/app.component';
import {Exo1Component} from './components/exo1/exo1.component';
import {PlanComponent} from './components/plan/plan.component';
import {PresentationComponent} from './components/presentation/presentation.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'exercice1', component: Exo1Component},
  { path: 'plan', component: PlanComponent},
  { path: 'presentation', component: PresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
