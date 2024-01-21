import { Component } from '@angular/core';
import { BurgerService } from 'src/app/core/services/burger.service';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  constructor(private burgerServ: BurgerService) {}
  toggleBurger() {
    this.burgerServ.toggleBurgerSubject.next(false);
  }
}
