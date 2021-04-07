import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6ProcedimientoPage } from './e6-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E6ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6ProcedimientoPageRoutingModule {}
