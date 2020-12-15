import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class E14evaluacionService {

  url = 'http://localhost:3000/evaluacionReq';

  constructor( private http: HttpClient ) { }

  postEvaluacionReq(form) {
    return this.http.post(`${this.url}/create`, form);
  }

  getEvaluacionReq() {
    return this.http.get(`${this.url}/`);
  }
  getEvaluacionReqId(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateEvaluacionReqId(id: string, body) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteEvaluacionReqId(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
