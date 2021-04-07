import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E12ProcedimientoPage } from './e12-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E12ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E12ProcedimientoPageRoutingModule {}
