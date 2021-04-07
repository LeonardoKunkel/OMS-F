import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E10MenuPage } from './e10-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E10MenuPage
  },  {
    path: 'e10-procedimiento',
    loadChildren: () => import('./e10-procedimiento/e10-procedimiento.module').then( m => m.E10ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E10MenuPageRoutingModule {}
