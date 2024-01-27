import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './us-aid/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { TbcItViewComponent } from './tbc-it/tbc-it-view/tbc-it-view.component';
import { RiskViewComponent } from './risk/risk-view/risk-view.component';
import { AllQuestionsViewComponent } from './all-questions/all-questions-view/all-questions-view.component';
import { UsaidAboutViewComponent } from './usaid-about/usaid-about-view/usaid-about-view.component';
import { QuestionDetailComponent } from './us-aid/courses/course-item/question-detail/question-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/USAID', pathMatch: 'full' },
  { path: 'USAID', component: ViewComponent },
  { path: 'USAID/:id', component: QuestionDetailComponent },
  { path: 'home', component: HomeViewComponent },
  { path: 'tbc-it', component: TbcItViewComponent },
  { path: 'usaid-faq', component: AllQuestionsViewComponent },
  { path: 'usaid-about', component: UsaidAboutViewComponent },
  { path: 'risk', component: RiskViewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
