import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visual-post',
  templateUrl: './visual-post.component.html',
  styleUrls: ['./visual-post.component.css']
})
export class VisualPostComponent {
  @Input() barId!: string;
  @Input() posteo: any;
  @Output() postClicked: EventEmitter<any> = new EventEmitter();

  onPostClick() {
    this.postClicked.emit(this.posteo);
  }
}
