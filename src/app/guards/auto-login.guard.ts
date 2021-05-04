import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
import { AutenticacionService } from '../services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {

  constructor( private authService: AutenticacionService, private router: Router ) {}

  canLoad(): Observable<boolean> {
    return this.authService.estaAutenticado.pipe(
      filter(val => val !== null),
      take(1),
      map(estaAutenticado => {
        if (estaAutenticado) {
          this.router.navigateByUrl('/intro', { replaceUrl: true });
        } else {
          return true;
        }
      })
    );
  }
}
