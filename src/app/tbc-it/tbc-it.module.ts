import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TbcItViewComponent } from './tbc-it-view/tbc-it-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [TbcItViewComponent],
  imports: [CommonModule, CoreModule],
})
export class TbcItModule {}
