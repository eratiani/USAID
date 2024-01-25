import { Component, OnDestroy, OnInit } from '@angular/core';
import { SliderService } from '../shared/services/slider.service';
import { ISliderDto } from '../shared/dto/slider.dto';
import { trigger, transition, style, animate } from '@angular/animations';
import { ResizeListenerService } from 'src/app/core/services/resize-listener.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [style({ opacity: 1 }), style({ opacity: 0 })]),
    ]),
  ],
})
export class SliderComponent implements OnInit, OnDestroy {
  sliders!: ISliderDto[];
  tempSlider: ISliderDto[] = [];
  pageSize!: number;
  windowWidthSub!: Subscription;
  private activeIndex: number = 0;
  private intervalId!: any;
  constructor(
    private sliderServ: SliderService,
    private resizeServ: ResizeListenerService
  ) {}

  ngOnInit(): void {
    this.sliders = this.sliderServ.getSliderItems();
    this.tempSlider = this.sliders;
    this.pageSize = this.resizeServ.getScreenWidth();
    this.windowWidthSub = this.resizeServ.screenWidth.subscribe(
      (val) => (this.pageSize = val)
    );
    this.startInterval();
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.windowWidthSub.unsubscribe();
  }
  get activeState(): string {
    return this.activeIndex.toString();
  }
  handleButtonClick(event: boolean) {
    if (event) {
      this.nextSlide();
    } else {
      this.prevSlide();
    }
    this.restartInterval();
  }
  nextSlide() {
    const slidesPerSet = 3;
    this.activeIndex =
      (this.activeIndex + 1) % Math.ceil(this.tempSlider.length / slidesPerSet);
    const startIdx = this.activeIndex * slidesPerSet;
    this.sliders = this.tempSlider.slice(startIdx, startIdx + slidesPerSet);
  }

  prevSlide() {
    const slidesPerSet = 3;
    this.activeIndex =
      (this.activeIndex -
        1 +
        Math.ceil(this.tempSlider.length / slidesPerSet)) %
      Math.ceil(this.tempSlider.length / slidesPerSet);
    const startIdx = this.activeIndex * slidesPerSet;
    this.sliders = this.tempSlider.slice(startIdx, startIdx + slidesPerSet);
  }
  changeSlide(val: string) {
    this.activeIndex = Number(val);
    this.sliders = this.tempSlider.slice(Number(val) * 3);
    this.restartInterval();
  }
  private startInterval() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private restartInterval() {
    this.clearInterval();
    this.startInterval();
  }

  private clearInterval() {
    clearInterval(this.intervalId);
  }
}
