import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { DesktopComponent } from './header/navigation/desktop/desktop.component';
import { MobileComponent } from './header/navigation/mobile/mobile.component';
import { BurgerComponent } from './header/navigation/mobile/burger/burger.component';
import { NavMobileComponent } from './header/navigation/mobile/nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DesktopComponent,
    MobileComponent,
    BurgerComponent,
    NavMobileComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
