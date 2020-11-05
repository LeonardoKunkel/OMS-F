import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( private authService: AutenticacionService, private router: Router ) {}

  canLoad(): Observable<boolean> {
    return this.authService.estaAutenticado.pipe(
      filter(val => val !== null),
      take(1),
      map(estaAutenticado => {
        console.log('GUARD: ', estaAutenticado);

        if (estaAutenticado) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
