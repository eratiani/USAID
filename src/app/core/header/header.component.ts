import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResizeListenerService } from '../services/resize-listener.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  widowPosY!: number;
  windowWidth!: number;
  windowPosYSub!: Subscription;
  windowWidthSub!: Subscription;
  constructor(private scrollServ: ResizeListenerService) {}

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
  ngOnDestroy(): void {
    this.windowPosYSub.unsubscribe();
    this.windowWidthSub.unsubscribe();
  }
}
