import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E5MenuPage } from './e5-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E5MenuPage
  },  {
    path: 'e5-procedimiento',
    loadChildren: () => import('./e5-procedimiento/e5-procedimiento.module').then( m => m.E5ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E5MenuPageRoutingModule {}
