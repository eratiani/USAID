import { Component, Input } from '@angular/core';

import { ISliderDto } from '../../shared/dto/slider.dto';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent {
  @Input() currSlider!: ISliderDto;
}
