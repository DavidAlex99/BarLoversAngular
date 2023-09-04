import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visual-evento',
  templateUrl: './visual-evento.component.html',
  styleUrls: ['./visual-evento.component.css']
})
export class VisualEventoComponent {
  @Input() evento: any;
  @Output() eventoClicked: EventEmitter<any> = new EventEmitter();

  onBarClick() {
    this.eventoClicked.emit(this.evento);
  }
}
