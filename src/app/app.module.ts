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
import { AllQuestionsModule } from './all-questions/all-questions.module';
import { CoreModule } from './core/core.module';
import { UsaidAboutModule } from './usaid-about/usaid-about.module';

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
    AllQuestionsModule,
    CoreModule,
    UsaidAboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
