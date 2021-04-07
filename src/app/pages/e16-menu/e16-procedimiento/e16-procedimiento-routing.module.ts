import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E16ProcedimientoPage } from './e16-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E16ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E16ProcedimientoPageRoutingModule {}
