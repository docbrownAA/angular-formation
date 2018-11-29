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
import {EnumComponent} from './components/enum/enum.component';
import {SignupComponent} from './components/signup/signup.component';
import {ServiceComponent} from './components/service/service.component';
import {PromobseComponent} from './components/promobse/promobse.component';
import {ParametersComponent} from './components/parameters/parameters.component';
import {SecureRouteGuard} from './guard/SecureRoute/secure-route.guard';
import {AuthComponent} from './components/auth/auth.component';

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
  { path: 'enum', component: EnumComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'custom-directive', component: CustomDirectiveComponent},
  { path: 'promobse', component: PromobseComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'parameters', component: ParametersComponent},
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    data: {'value': 'Hello World !'},
    canActivate: [SecureRouteGuard]
  },
  { path: 'service', component: ServiceComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // full => recherche sur toute l'url, prefix: recherche suyr le début de l'url
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
