import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E4MenuPage } from './e4-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E4MenuPage
  },  {
    path: 'e4-procedimiento',
    loadChildren: () => import('./e4-procedimiento/e4-procedimiento.module').then( m => m.E4ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E4MenuPageRoutingModule {}
