import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent {
  @ViewChild('burgerContainer') burgerContainer!: ElementRef<HTMLElement>;
  @ViewChild('burgerBefore') burgerBefore!: ElementRef;
  @ViewChild('burgerCenter') burgerCenter!: ElementRef;
  @ViewChild('burgerAfter') burgerAfter!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  onBurgerClick() {
    this.toggleClasses();
  }
  onOverlayClick() {
    this.toggleClasses();
  }
  toggleClasses() {
    this.toggleClass(
      this.burgerContainer.nativeElement,
      'burger__rotate--main'
    );
    this.toggleClass(this.burgerBefore.nativeElement, 'burger__rotate__before');
    this.toggleClass(this.burgerAfter.nativeElement, 'burger__rotate--after');
    this.toggleClass(this.burgerCenter.nativeElement, 'bg__burger--lines');
    this.toggleClass(this.overlay.nativeElement, 'overlay__active');
  }
  toggleClass(element: HTMLElement, className: string) {
    element.classList.toggle(className);
  }
}
