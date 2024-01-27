import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './us-aid/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { TbcItViewComponent } from './tbc-it/tbc-it-view/tbc-it-view.component';
import { RiskViewComponent } from './risk/risk-view/risk-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/USAID', pathMatch: 'full' },
  { path: 'USAID', component: ViewComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'tbc-it', component: TbcItViewComponent },
  { path: 'risk', component: RiskViewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
