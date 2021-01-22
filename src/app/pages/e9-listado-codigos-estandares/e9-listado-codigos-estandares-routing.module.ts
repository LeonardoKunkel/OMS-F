import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E9ListadoCodigosEstandaresPage } from './e9-listado-codigos-estandares.page';

const routes: Routes = [
  {
    path: '',
    component: E9ListadoCodigosEstandaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E9ListadoCodigosEstandaresPageRoutingModule {}
