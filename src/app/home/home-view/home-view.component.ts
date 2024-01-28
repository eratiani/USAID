import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

import { IsActiveService } from 'src/app/core/services/is-active.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements AfterViewInit {
  constructor(
    private isActiveServ: IsActiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.isActiveServ.activePageSubject.next('home');
    this.cdr.detectChanges();
  }
}
