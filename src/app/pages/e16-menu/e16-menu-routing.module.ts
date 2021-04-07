import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E16MenuPage } from './e16-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E16MenuPage
  },  {
    path: 'e16-procedimiento',
    loadChildren: () => import('./e16-procedimiento/e16-procedimiento.module').then( m => m.E16ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E16MenuPageRoutingModule {}
