import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskViewComponent } from './risk-view/risk-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [RiskViewComponent],
  imports: [CommonModule, CoreModule],
})
export class RiskModule {}
