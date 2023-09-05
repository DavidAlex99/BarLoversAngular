import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Importación de la interfaz
import {Root2} from '../../interfaces/informacion-bar';

  //Importación del servicio
import {MongodbAPIService} from '../../services/barPrincipal/main-bar.service';
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-detalles-bar',
  templateUrl: './detalles-bar.component.html',
  styleUrls: ['./detalles-bar.component.css']
})



export class DetallesBarComponent implements OnInit {
  bar: any;

  constructor(private route: ActivatedRoute, private barService: MongodbAPIService) {}

  ngOnInit(): void {
    // Obtener el ID del bar desde la URL
    const barId = this.route.snapshot.paramMap.get('barId')!;
    
    // Usar el servicio para obtener el detalle del bar
    this.barService.getBarById(barId).subscribe(barData => {
      this.bar = barData;
    });
  }
  
}
