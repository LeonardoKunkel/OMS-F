import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E1PoliticaService {

  url = 'http://localhost:3000/politica'

  constructor( private http: HttpClient ) { }
  
  getPolitica() {
    return this.http.get(`${this.url}/`)
  }
  
  postPolitica(form) {
    return this.http.post(`${this.url}/create`, form)
  }
  
}
