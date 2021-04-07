import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7MenuPage } from './e7-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E7MenuPage
  },  {
    path: 'e7-lista',
    loadChildren: () => import('./e7-lista/e7-lista.module').then( m => m.E7ListaPageModule)
  },
  {
    path: 'e7-procedimiento',
    loadChildren: () => import('./e7-procedimiento/e7-procedimiento.module').then( m => m.E7ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7MenuPageRoutingModule {}
