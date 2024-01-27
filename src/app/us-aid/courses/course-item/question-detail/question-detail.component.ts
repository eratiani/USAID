import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent {
  currProject!: string;
  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.currProject = id;
  }
}
