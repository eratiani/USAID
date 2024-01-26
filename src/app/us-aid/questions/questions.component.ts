import { Component, OnInit } from '@angular/core';

import { IQuestionDto } from '../shared/dto/qustion.dto';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions!: IQuestionDto[];
  constructor(private questionServ: QuestionService) {}
  ngOnInit(): void {
    this.questions = this.questionServ.getQuestions();
  }
}
