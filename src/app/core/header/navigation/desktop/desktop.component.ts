import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IsActiveService } from 'src/app/core/services/is-active.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit, OnDestroy {
  isActiveSub!: Subscription;
  currActivePage!: string;
  constructor(private isActiveServ: IsActiveService) {}

  ngOnInit(): void {
    this.isActiveSub = this.isActiveServ.activePageSubject.subscribe(
      (val) => (this.currActivePage = val)
    );
  }
  ngOnDestroy(): void {
    this.isActiveSub.unsubscribe();
  }
}
