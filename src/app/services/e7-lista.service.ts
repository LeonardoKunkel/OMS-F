import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E7ListaService {

  url = 'http://localhost:3000/lista';

  constructor( private http: HttpClient ) { }

  postLista(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getLista() {
    return this.http.get(`${this.url}/`);
  }

  getListaId(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateListaId(id: string, body) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteListaId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
