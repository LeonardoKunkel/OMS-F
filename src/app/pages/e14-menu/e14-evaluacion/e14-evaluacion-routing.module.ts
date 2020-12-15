import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E14EvaluacionPage } from './e14-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: E14EvaluacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E14EvaluacionPageRoutingModule {}
