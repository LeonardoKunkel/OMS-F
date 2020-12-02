import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E11EquipoCriticoService {

  url = 'http://localhost:3000/equipoCrit';

  constructor( private http: HttpClient ) { }

  postEquipoCrit(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getEquipoCrit() {
    return this.http.get(`${this.url}/`);
  }
  getEquipoCritId(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateEquipoCritId(id: string, body) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteEquipoCritId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
