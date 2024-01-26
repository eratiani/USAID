import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './us-aid/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/USAID', pathMatch: 'full' },
  { path: 'USAID', component: ViewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
