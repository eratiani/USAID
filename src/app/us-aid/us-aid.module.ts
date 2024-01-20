import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { IntroComponent } from './intro/intro.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider/slider-item/slider-item.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionItemComponent } from './questions/question-item/question-item.component';
import { AnswerComponent } from './questions/answer/answer.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ViewComponent,
    IntroComponent,
    CoursesComponent,
    CourseItemComponent,
    SliderComponent,
    SliderItemComponent,
    QuestionsComponent,
    QuestionItemComponent,
    AnswerComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [ViewComponent],
})
export class UsAidModule {}
