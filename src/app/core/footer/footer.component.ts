import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TermsService } from '../services/terms.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  isTermsClicked = false;
  termsSub!: Subscription;
  constructor(private termsServ: TermsService) {}
  ngOnInit(): void {
    this.termsSub = this.termsServ.toggleTermsSubject.subscribe(
      (val) => (this.isTermsClicked = val)
    );
  }
  ngOnDestroy(): void {
    this.termsSub.unsubscribe();
  }
  onTermsClick() {
    this.termsServ.toggleTermsSubject.next(!this.isTermsClicked);
  }
  onOverlayClick() {
    this.termsServ.toggleTermsSubject.next(!this.isTermsClicked);
  }
}
