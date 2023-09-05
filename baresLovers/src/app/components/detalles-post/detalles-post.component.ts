import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Importación de la interfaz
import {Post} from '../../interfaces/informacion-bar';

  //Importación del servicio
import {MongodbAPIService} from '../../services/barPrincipal/main-bar.service';

@Component({
  selector: 'app-detalles-post',
  templateUrl: './detalles-post.component.html',
  styleUrls: ['./detalles-post.component.css']
})

export class DetallesPostComponent implements OnInit {
  barId!: string;
  postName!: string;
  barDetails: any;  // para almacenar todos los detalles del bar
  specificPost: any;  // para almacenar los detalles del evento específico

  constructor(
    private route: ActivatedRoute,
    private mongodbAPIService: MongodbAPIService
  ) {}

  ngOnInit(): void {
    this.barId = this.route.snapshot.paramMap.get('barId') || '';
    this.postName = this.route.snapshot.paramMap.get('namePost') || '';
    this.loadBarDetails();
    console.log(this.route.snapshot);
    console.log(this.postName);
    console.log(this.barId);
  }

  loadBarDetails() {
    this.mongodbAPIService.getBarById(this.barId).subscribe(data => {
      this.barDetails = data;
      
      this.specificPost = this.barDetails.posts.find((posteo: Post) => posteo.namePost === this.postName);
    });
  }
}
