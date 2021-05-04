import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro5Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro5(datos) {
    return this.httpClient.post('http://localhost:3000/simulacro5/create', datos);
  }

  getSimulacro5() {
    return this.httpClient.get('http://localhost:3000/simulacro5/');
  }
}
