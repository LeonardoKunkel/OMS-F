import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E2RiesgosService {

  url = 'http://localhost:3000/riesgos';

  constructor( private http: HttpClient ) { }

  postRiesgos(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getRiesgos() {
    return this.http.get(`${this.url}/`);
  }

  getRiesgosId(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateRiesgosId(id: string, body) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteRiesgosId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
