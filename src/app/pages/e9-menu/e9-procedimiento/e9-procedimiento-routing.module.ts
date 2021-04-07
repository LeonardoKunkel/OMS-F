import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E9ProcedimientoPage } from './e9-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E9ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E9ProcedimientoPageRoutingModule {}
