import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7ProcedimientoPage } from './e7-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E7ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7ProcedimientoPageRoutingModule {}
