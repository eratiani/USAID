import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { BurgerService } from 'src/app/core/services/burger.service';
import { IsActiveService } from 'src/app/core/services/is-active.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  currActivePage!: string;
  isActiveSub!: Subscription;
  constructor(
    private burgerServ: BurgerService,
    private isActiveServ: IsActiveService
  ) {}
  toggleBurger() {
    this.burgerServ.toggleBurgerSubject.next(false);
  }
  ngOnInit(): void {
    this.isActiveSub = this.isActiveServ.activePageSubject.subscribe(
      (val) => (this.currActivePage = val)
    );
  }
  ngOnDestroy(): void {
    this.isActiveSub.unsubscribe();
  }
}
