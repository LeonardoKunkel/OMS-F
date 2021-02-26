import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E11InspeccionTanquesRegistrosPage } from './e11-inspeccion-tanques-registros.page';

const routes: Routes = [
  {
    path: '',
    component: E11InspeccionTanquesRegistrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E11InspeccionTanquesRegistrosPageRoutingModule {}
