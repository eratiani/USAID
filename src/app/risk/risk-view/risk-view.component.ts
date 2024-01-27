import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

import { IsActiveService } from 'src/app/core/services/is-active.service';

@Component({
  selector: 'app-risk-view',
  templateUrl: './risk-view.component.html',
  styleUrls: ['./risk-view.component.scss'],
})
export class RiskViewComponent implements AfterViewInit {
  constructor(
    private isActiveServ: IsActiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.isActiveServ.activePageSubject.next('risk');
    this.cdr.detectChanges();
  }
}
