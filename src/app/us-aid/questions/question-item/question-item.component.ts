import { Component, Input } from '@angular/core';

import { IQuestionDto } from '../../shared/dto/qustion.dto';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
})
export class QuestionItemComponent {
  isFullHeight = false;
  @Input() currQuestion!: IQuestionDto;
  onToggle() {
    this.isFullHeight = !this.isFullHeight;
  }
}
