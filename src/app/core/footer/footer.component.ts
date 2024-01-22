import { Component } from '@angular/core';
import { TermsService } from '../services/terms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isTermsClicked: boolean = false;
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
