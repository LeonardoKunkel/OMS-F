import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E18ProcedimientoPage } from './e18-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E18ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E18ProcedimientoPageRoutingModule {}
