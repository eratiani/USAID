import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllQuestionsViewComponent } from './all-questions-view/all-questions-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [AllQuestionsViewComponent],
  imports: [CommonModule, CoreModule],
})
export class AllQuestionsModule {}
