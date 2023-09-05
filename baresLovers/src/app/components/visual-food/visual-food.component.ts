import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visual-food',
  templateUrl: './visual-food.component.html',
  styleUrls: ['./visual-food.component.css']
})
export class VisualFoodComponent {
  @Input() barId!: string;
  @Input() comida: any;
  @Output() foodClicked: EventEmitter<any> = new EventEmitter();
  discountPercentage: number = 0;
  discountedPrice: number = 0;


  onEventoClick() {
    this.foodClicked.emit(this.comida);
  }

  applyDiscount() {
    if (this.discountPercentage >= 0 && this.discountPercentage <= 100) {
        this.discountedPrice = this.comida.price - (this.comida.price * (this.discountPercentage / 100));
    } else {
        alert('Por favor, introduce un descuento válido entre 0 y 100.');
    }
  }

}
