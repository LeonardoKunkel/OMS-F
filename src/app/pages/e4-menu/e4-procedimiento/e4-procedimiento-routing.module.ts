import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E4ProcedimientoPage } from './e4-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E4ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E4ProcedimientoPageRoutingModule {}
