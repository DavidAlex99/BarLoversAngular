import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Importación de la interfaz
import {Evento} from '../../interfaces/informacion-bar';

  //Importación del servicio
import {MongodbAPIService} from '../../services/barPrincipal/main-bar.service';

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.css']
})
export class DetallesEventoComponent implements OnInit {
  barId!: string;
  eventName!: string;
  barDetails: any;  // para almacenar todos los detalles del bar
  specificEvent: any;  // para almacenar los detalles del evento específico

  constructor(
    private route: ActivatedRoute,
    private mongodbAPIService: MongodbAPIService
  ) {}

  ngOnInit(): void {
    this.barId = this.route.snapshot.paramMap.get('barId') || '';
    this.eventName = this.route.snapshot.paramMap.get('nameEvent') || '';
    this.loadBarDetails();
    console.log(this.route.snapshot);
    console.log(this.eventName);
    console.log(this.barId);
  }

  loadBarDetails() {
    this.mongodbAPIService.getBarById(this.barId).subscribe(data => {
      this.barDetails = data;
      this.specificEvent = this.barDetails.events.find((evento: Evento) => evento.nameEvent === this.eventName);
    });
  }
}