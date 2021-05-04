import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro2Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro2(datos) {
    return this.httpClient.post('http://localhost:3000/simulacro2/create', datos);
  }

  getSimulacro2() {
    return this.httpClient.get('http://localhost:3000/simulacro2/');
  }
}
