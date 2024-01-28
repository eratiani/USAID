import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss'],
})
export class DotsComponent {
  @Output() dotClicked: EventEmitter<string> = new EventEmitter<string>();
  onDotClick(val: string) {
    this.dotClicked.emit(val);
  }
}
