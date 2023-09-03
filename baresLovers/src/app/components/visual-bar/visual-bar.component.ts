import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visual-bar',
  templateUrl: './visual-bar.component.html',
  styleUrls: ['./visual-bar.component.css']
})
export class VisualBarComponent {
  @Input() bar: any;
  @Output() barClicked: EventEmitter<any> = new EventEmitter();

  onBarClick() {
    this.barClicked.emit(this.bar);
  }
}
