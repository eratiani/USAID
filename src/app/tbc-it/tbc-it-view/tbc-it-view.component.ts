import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

import { IsActiveService } from 'src/app/core/services/is-active.service';

@Component({
  selector: 'app-tbc-it-view',
  templateUrl: './tbc-it-view.component.html',
  styleUrls: ['./tbc-it-view.component.scss'],
})
export class TbcItViewComponent implements AfterViewInit {
  constructor(
    private isActiveServ: IsActiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.isActiveServ.activePageSubject.next('tbc-it');
    this.cdr.detectChanges();
  }
}
