import { Component, OnInit } from '@angular/core';
import { SliderService } from '../shared/services/slider.service';
import { ISliderDto } from '../shared/dto/slider.dto';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  sliders!: ISliderDto[];
  constructor(private sliderServ: SliderService) {}
  ngOnInit(): void {
    this.sliders = this.sliderServ.getSliderItems();
  }
}
