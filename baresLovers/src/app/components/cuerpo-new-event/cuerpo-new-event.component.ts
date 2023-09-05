import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo-new-event',
  templateUrl: './cuerpo-new-event.component.html',
  styleUrls: ['./cuerpo-new-event.component.css']
})
export class CuerpoNewEventComponent {
  formularioData: any = {};

  submitForm() {
    // Aquí puedes enviar los datos del formulario al servidor utilizando un servicio HTTP.
    // Ejemplo:
    // this.miServicio.postData(this.formularioData).subscribe(response => {
    //   console.log(response);
    // });
  }

  goBack() {
    // Aquí puedes agregar la lógica para volver a la página anterior.
    // Ejemplo:
    // this.router.navigate(['/pagina-anterior']);
  }
}
