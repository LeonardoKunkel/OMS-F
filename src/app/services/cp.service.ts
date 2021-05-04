import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CpService {

  constructor(
   private http: HttpClient
  ) { }

  getCp(cp) {
  return this.http.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${cp}`);
  // return this.http.get('https://api-sepomex.hckdrk.mx/query/info_cp/76905');
  }
}
