import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E2AspectosService {

  url = 'http://localhost:3000/aspectos';

  constructor( private http: HttpClient ) { }

  postAspectos(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getAspectos() {
    return this.http.get(`${this.url}/`);
  }

  getAspectosId(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateAspectosId(id: string, body) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteAspectosId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
