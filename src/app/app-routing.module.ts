import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './us-aid/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: '/USAID', pathMatch: 'full' },
  { path: 'USAID', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
