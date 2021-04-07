import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E10ProcedimientoPage } from './e10-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E10ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E10ProcedimientoPageRoutingModule {}
