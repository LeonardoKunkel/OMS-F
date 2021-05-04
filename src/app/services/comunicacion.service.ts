import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  url = 'http://localhost:3000/comunicacion';

  constructor( private http: HttpClient ) { }

  getComs() {
    return this.http.get(`${this.url}`);
  }

  postComs( form ) {
    return this.http.post(`${this.url}/create`, form)
  }

  deleteComsId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
