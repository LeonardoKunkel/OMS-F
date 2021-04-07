import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E15MenuPage } from './e15-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E15MenuPage
  },  {
    path: 'e15-procedimiento',
    loadChildren: () => import('./e15-procedimiento/e15-procedimiento.module').then( m => m.E15ProcedimientoPageModule)
  },
  {
    path: 'e15-plan',
    loadChildren: () => import('./e15-plan/e15-plan.module').then( m => m.E15PlanPageModule)
  },
  {
    path: 'e15-informe',
    loadChildren: () => import('./e15-informe/e15-informe.module').then( m => m.E15InformePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E15MenuPageRoutingModule {}
