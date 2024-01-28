import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsaidAboutViewComponent } from './usaid-about-view/usaid-about-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UsaidAboutViewComponent],
  imports: [CommonModule, CoreModule],
})
export class UsaidAboutModule {}
