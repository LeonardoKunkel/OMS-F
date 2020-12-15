import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E14MenuPage } from './e14-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E14MenuPage
  },  {
    path: 'e14-evaluacion',
    loadChildren: () => import('./e14-evaluacion/e14-evaluacion.module').then( m => m.E14EvaluacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E14MenuPageRoutingModule {}
