import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E1MenuPage } from './e1-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E1MenuPage
  },  {
    path: 'e1-procedimiento',
    loadChildren: () => import('./e1-procedimiento/e1-procedimiento.module').then( m => m.E1ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E1MenuPageRoutingModule {}
