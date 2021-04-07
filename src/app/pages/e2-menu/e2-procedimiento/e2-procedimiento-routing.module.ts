import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2ProcedimientoPage } from './e2-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E2ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2ProcedimientoPageRoutingModule {}
