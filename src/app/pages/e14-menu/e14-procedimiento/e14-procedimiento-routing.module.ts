import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E14ProcedimientoPage } from './e14-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E14ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E14ProcedimientoPageRoutingModule {}
