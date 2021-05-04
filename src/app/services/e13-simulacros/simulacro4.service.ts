import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro4Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro4(datos) {
    return this.httpClient.post('http://localhost:3000/simulacro4/create', datos);
  }

  getSimulacro4() {
    return this.httpClient.get('http://localhost:3000/simulacro4/');
  }
}
