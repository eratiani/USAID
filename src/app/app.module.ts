import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsAidModule } from './us-aid/us-aid.module';
import { HomeModule } from './home/home.module';
import { TbcItModule } from './tbc-it/tbc-it.module';
import { RiskModule } from './risk/risk.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsAidModule,
    BrowserAnimationsModule,
    HomeModule,
    TbcItModule,
    RiskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
