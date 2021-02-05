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

  postEstacion(body, photo: File){
    const bodys:any = {
      cp:body.cp.cp,
      ciudad:body.cp.ciudad
    };
     const fd = new FormData();
    fd.append('nombre',body.nombre);
    fd.append('correo',body.correo);
    fd.append('telefono',body.telefono);
    fd.append('idRepresentante',body.idRepresentante);
    fd.append('idAutoridad',body.idAutoridad);
    fd.append('idGerente',body.idGerente);
    fd.append('cp',body.cp.cp);
    fd.append('asentamiento',body.cp.asentamiento);
    fd.append('ciudad',body.cp.ciudad);
    fd.append('estado',body.cp.estado);
    fd.append('municipio',body.cp.municipio);
    fd.append('estado',body.cp.estado);
    fd.append('calleNumero',body.calleNumero);
    fd.append('myfile',photo);
     return this.http.post(`${this.url}/create`, fd);
    // console.log(body.cp, 'Desde el servicio'); 
    

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
