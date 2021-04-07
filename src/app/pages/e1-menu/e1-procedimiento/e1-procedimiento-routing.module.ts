import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E1ProcedimientoPage } from './e1-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E1ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E1ProcedimientoPageRoutingModule {}
