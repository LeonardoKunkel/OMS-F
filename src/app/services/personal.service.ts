import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Personal {
  _id?: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: number;
  puesto: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  url = 'http://localhost:3000/personal';

  constructor( private http: HttpClient ) { }

  getPersonal() {
    return this.http.get(`${this.url}`);
  }

  postPersonal( form ) {
    return this.http.post(`${this.url}/create`, form)
  }

  deletePersonal( id: string ) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getPostById( id: string ) {
    return this.http.get(`${this.url}/${id}`);
  }

  updatePersonalById( id: string, body: Personal ) {
    return this.http.put(`${this.url}/${id}`, body);
  }
}
