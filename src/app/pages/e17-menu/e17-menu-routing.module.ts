import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E17MenuPage } from './e17-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E17MenuPage
  },  {
    path: 'e17-procedimiento',
    loadChildren: () => import('./e17-procedimiento/e17-procedimiento.module').then( m => m.E17ProcedimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E17MenuPageRoutingModule {}
