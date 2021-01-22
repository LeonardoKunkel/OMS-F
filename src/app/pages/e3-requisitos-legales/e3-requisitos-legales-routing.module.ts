import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E3RequisitosLegalesPage } from './e3-requisitos-legales.page';

const routes: Routes = [
  {
    path: '',
    component: E3RequisitosLegalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E3RequisitosLegalesPageRoutingModule {}
