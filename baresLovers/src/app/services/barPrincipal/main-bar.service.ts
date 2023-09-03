import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MongodbAPIService {


   //Atributo URL
   private URL: string = 'http://localhost:4000/bars';

  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { }

  getBars() {
    return this.http.get<any[]>(this.URL).pipe(
      catchError(error => {
        console.error('Error al obtener los bares:', error);
        return throwError(error);
      })
    );
  }

  getBarById(id: string) {
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  // getBarById(id: string): Bar {
  //   return this.data.find(bar => bar._id.$oid === id);
  // }
}
  