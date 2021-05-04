import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro3Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro3(datos) {
    return this.httpClient.post('http://localhost:3000/simulacro3/create', datos);
  }

  getSimulacro3() {
    return this.httpClient.get('http://localhost:3000/simulacro3/');
  }
}
