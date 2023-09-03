import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visual-bar',
  templateUrl: './visual-bar.component.html',
  styleUrls: ['./visual-bar.component.css']
})
export class VisualBarComponent {
/* 
  //Inyección de dependencia del servicio
  constructor(private dataProvider: MongodbAPIService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Root2[] = [];

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Root2[]); 
    })
  } */
  @Input() bar: any; // Esto define una entrada llamada "bar" que puedes pasar al componente

  constructor() { }

  ngOnInit(): void {
  }
}
