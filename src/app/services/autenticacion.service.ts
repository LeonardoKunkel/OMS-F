import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  estaAutenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  constructor( private http: HttpClient ) { this.cargarToken(); }

  async cargarToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.estaAutenticado.next(true);
    } else {
      this.estaAutenticado.next(false);
    }
  }

  login(credentials: {email, password}): Observable<any> {
    return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      }),
      tap(_ => {
        this.estaAutenticado.next(true);
      })
    );
  }

  logout(): Promise<void> {
    this.estaAutenticado.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }

}
