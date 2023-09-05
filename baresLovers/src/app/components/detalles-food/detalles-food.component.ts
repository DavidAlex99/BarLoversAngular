import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Importación de la interfaz
import {Menu} from '../../interfaces/informacion-bar';

  //Importación del servicio
import {MongodbAPIService} from '../../services/barPrincipal/main-bar.service';

@Component({
  selector: 'app-detalles-food',
  templateUrl: './detalles-food.component.html',
  styleUrls: ['./detalles-food.component.css']
})
export class DetallesFoodComponent implements OnInit {
  barId!: string;
  foodName!: string;
  barDetails: any;  // para almacenar todos los detalles del bar
  specificFood: any;  // para almacenar los detalles del evento específico
  discount: number = 0;  // Variable para el porcentaje de descuento
  discountedPrice?: number;  // Variable para almacenar el precio con descuento

  constructor(
    private route: ActivatedRoute,
    private mongodbAPIService: MongodbAPIService
  ) {}

  ngOnInit(): void {
    this.barId = this.route.snapshot.paramMap.get('barId') || '';
    this.foodName = this.route.snapshot.paramMap.get('nameFood') || '';
    this.loadBarDetails();
    console.log(this.route.snapshot);
    console.log(this.foodName);
    console.log(this.barId);
  }

  loadBarDetails() {
    this.mongodbAPIService.getBarById(this.barId).subscribe(data => {
      this.barDetails = data;
      this.specificFood = this.barDetails.menu.find((comida: Menu) => comida.name === this.foodName);
      console.log(typeof this.specificFood.price);

    });
  }

  applyDiscount(discountValue: string): void {
    const discount = parseFloat(discountValue) / 100;
    this.discountedPrice = this.specificFood.price - (this.specificFood.price * discount);
  }

  
}
