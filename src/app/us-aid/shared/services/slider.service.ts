import { Injectable } from '@angular/core';
import { ISliderDto } from '../dto/slider.dto';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  sliders: ISliderDto[] = [
    { imgSrc: '../../../../assets/usaid.png', id: 1 },
    { imgSrc: '../../../../assets/usaid.png', id: 2 },
    { imgSrc: '../../../../assets/usaid.png', id: 3 },
    { imgSrc: '../../../../assets/usaid.png', id: 4 },
    { imgSrc: '../../../../assets/usaid.png', id: 5 },
    { imgSrc: '../../../../assets/usaid.png', id: 6 },
    { imgSrc: '../../../../assets/usaid.png', id: 7 },
  ];
  constructor() {}
  getSliderItems() {
    return [...this.sliders];
  }
  getSliderItem(id: number) {
    return this.sliders.filter((slider) => slider.id === id)[0];
  }
}
