import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  url = 'http://localhost:3000/estacion';
  constructor(
    private http: HttpClient
  ) { }

  postEstacion(form){
    return this.http.post(`${this.url}/create`, form);
  }

  getEstacion(){
   return this.http.get(`${this.url}/`);
  }

  getEstacionId(id: string){
    return this.http.get(`http://localhost:3000/estacion/${id}`);
  }

  updateEstacionId(id: string, body){
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteEstacionId(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
