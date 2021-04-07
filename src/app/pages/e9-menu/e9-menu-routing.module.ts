import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E9MenuPage } from './e9-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E9MenuPage
  },  {
    path: 'e9-procedimiento',
    loadChildren: () => import('./e9-procedimiento/e9-procedimiento.module').then( m => m.E9ProcedimientoPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E9MenuPageRoutingModule {}
