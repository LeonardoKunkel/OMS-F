import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Politica {
  _id?: string;
  politicaSelected: string;
}

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
  
  updatePolitica(id: string, pol: Politica) {
    return this.http.put(`${this.url}/${id}`, pol);
  }
}
