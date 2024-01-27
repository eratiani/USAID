import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ResizeListenerService } from '../services/resize-listener.service';
import { IsActiveService } from '../services/is-active.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  widowPosY!: number;
  windowWidth!: number;
  windowPosYSub!: Subscription;
  windowWidthSub!: Subscription;
  constructor(
    private scrollServ: ResizeListenerService,
    private isActiveServ: IsActiveService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.widowPosY = this.scrollServ.getScrollPosition();
    this.windowWidth = this.scrollServ.getScreenWidth();
    this.windowPosYSub = this.scrollServ.scrollPosition.subscribe(
      (val) => (this.widowPosY = val)
    );

    this.windowWidthSub = this.scrollServ.screenWidth.subscribe(
      (val) => (this.windowWidth = val)
    );
  }
  ngAfterViewInit(): void {
    this.isActiveServ.activePageSubject.next('usAid');
    this.cdr.detectChanges();
  }
  ngOnDestroy(): void {
    this.windowPosYSub.unsubscribe();
    this.windowWidthSub.unsubscribe();
  }
}
