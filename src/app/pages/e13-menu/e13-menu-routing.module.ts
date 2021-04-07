import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E13MenuPage } from './e13-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E13MenuPage
  },  {
    path: 'e13-programa',
    loadChildren: () => import('./e13-programa/e13-programa.module').then( m => m.E13ProgramaPageModule)
  },
  {
    path: 'e13-acta',
    loadChildren: () => import('./e13-acta/e13-acta.module').then( m => m.E13ActaPageModule)
  },
  {
    path: 'e13-procedimiento',
    loadChildren: () => import('./e13-procedimiento/e13-procedimiento.module').then( m => m.E13ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E13MenuPageRoutingModule {}
