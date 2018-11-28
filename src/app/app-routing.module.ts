import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './components/base/app.component';
import {Exo1Component} from './components/exo1/exo1.component';
import {PlanComponent} from './components/plan/plan.component';
import {PresentationComponent} from './components/presentation/presentation.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PipeComponent} from './components/pipe/pipe.component';
import {DirectiveComponent} from './components/directive/directive.component';
import {CustomPipeComponent} from './components/custom-pipe/custom-pipe.component';
import {LocaleComponent} from './components/locale/locale.component';
import {CustomDirectiveComponent} from './components/custom-directive/custom-directive.component';
import {FormulaireComponent} from './components/formulaire/formulaire.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'exercice1', component: Exo1Component},
  { path: 'plan', component: PlanComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'pipe', component: PipeComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'custom-pipe', component: CustomPipeComponent},
  { path: 'locale', component: LocaleComponent},
  { path: 'formulaire', component: FormulaireComponent},
  { path: 'custom-directive', component: CustomDirectiveComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // full => recherche sur toute l'url, prefix: recherche suyr le début de l'url
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
