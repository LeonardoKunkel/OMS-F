import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E15ProcedimientoPage } from './e15-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E15ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E15ProcedimientoPageRoutingModule {}
