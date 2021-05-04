import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtintoresService {

  url = 'http://localhost:3000/extintor';

  constructor( private http: HttpClient ) { }

  getExtintor() {
    return this.http.get(`${this.url}/`);
  }

  postExtintor( form ) {
    return this.http.post(`${this.url}/create`, form);
  }

  deleteExtintorId( id: string ) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
