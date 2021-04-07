import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E3ProcedimientoPage } from './e3-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E3ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E3ProcedimientoPageRoutingModule {}
