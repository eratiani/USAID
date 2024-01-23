import { Component } from '@angular/core';
import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {
  constructor(private termsServ: TermsService) {}
  onTermsClose() {
    this.termsServ.toggleTermsSubject.next(false);
  }
}
