import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root2 } from '../../interfaces/informacion-bar';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  private apiUrl = 'http://localhost:4000/bars';

  constructor(private http: HttpClient) { }

  getBarById(id: string): Observable<Root2> {
    return this.http.get<Root2>(`${this.apiUrl}/bares/${id}`);
  }
  
}
