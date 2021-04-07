import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E13SimulacroService {

  url = 'http://localhost:3000/simulacro'

  constructor( private http: HttpClient ) { }

  getSimulacro1() {
    this.http.get(this.url);
  }

  updateSimulacro1(id: string, body) {
    this.http.put(`${this.url}/${id}`, body);
  }
}
