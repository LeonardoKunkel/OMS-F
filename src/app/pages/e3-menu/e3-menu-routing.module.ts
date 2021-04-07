import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E3MenuPage } from './e3-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E3MenuPage
  },  {
    path: 'e3-procedimiento',
    loadChildren: () => import('./e3-procedimiento/e3-procedimiento.module').then( m => m.E3ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E3MenuPageRoutingModule {}
