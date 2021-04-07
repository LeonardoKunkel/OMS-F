import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6MenuPage } from './e6-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E6MenuPage
  },  {
    path: 'e6-procedimiento',
    loadChildren: () => import('./e6-procedimiento/e6-procedimiento.module').then( m => m.E6ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6MenuPageRoutingModule {}
