import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E15InformePage } from './e15-informe.page';

const routes: Routes = [
  {
    path: '',
    component: E15InformePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E15InformePageRoutingModule {}
