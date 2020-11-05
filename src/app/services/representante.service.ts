import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  url='http://localhost:3000/representante';

  constructor(
    private http:HttpClient
  ) { }

  postRepresentante(form){
    return this.http.post(`${this.url}/create`,form);
  }

  getRepresentante(){
   return this.http.get(`${this.url}/`);
  }

  getRepresentanteId(id: String){
    return this.http.get(`${this.url}/${id}`);
  }

  updateRepresentanteId(id:string, body){
    return this.http.put(`${this.url}/${id}`,body)
  }

  deleteRepresentanteId(id:String){
    return this.http.delete(`${this.url}/${id}`);
  }
}
