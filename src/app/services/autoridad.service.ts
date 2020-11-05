import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutoridadService {
  url='http://localhost:3000/autoridad'
  constructor(
    private http:HttpClient
  ) { }

  postAutoridad(form){
    return this.http.post(`${this.url}/create`,form);
  }

  getAutoridad(){
   return this.http.get(`${this.url}/`);
  }

  getAutoridadId(id: String){
    return this.http.get(`${this.url}/${id}`);
  }

  updateAutoridadId(id:string, body){
    return this.http.put(`${this.url}/${id}`,body)
  }

  deleteAutoridadId(id:String){
    return this.http.delete(`${this.url}/${id}`);
  }
}
