import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    url = 'http://localhost:3000/producto';
    
    constructor( private http: HttpClient ) { }
    
    postProduct( form ) {
        return this.http.post(`${this.url}/create`, form);
    }
    
    getProduct() {
        return this.http.get(`${this.url}`);
    }
    
    deleteProductId( id: string ) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
