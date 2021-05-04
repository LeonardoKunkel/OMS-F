import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  url='http://localhost:3000/gerente';

  constructor(
    private http:HttpClient
  ) { }

  postGerente(form) {
    return this.http.post(`${this.url}/create`,form);
  }

  getGerente() {
   return this.http.get(`${this.url}/`);
  }

  getGerenteId(id: String) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateGerenteId(id:string, body) {
    return this.http.put(`${this.url}/${id}`,body)
  }

  deleteGerenteId(id:String) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
