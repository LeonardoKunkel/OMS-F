import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulacroService {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro(datos) {
    return this.httpClient.post('http://localhost:3000/simulacro1/create', datos);
  }

  getSimulacro() {
    return this.httpClient.get('http://localhost:3000/simulacro1/');
  }
}
