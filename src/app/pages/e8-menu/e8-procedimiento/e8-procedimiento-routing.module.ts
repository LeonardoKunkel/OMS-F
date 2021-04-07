import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E8ProcedimientoPage } from './e8-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E8ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E8ProcedimientoPageRoutingModule {}
