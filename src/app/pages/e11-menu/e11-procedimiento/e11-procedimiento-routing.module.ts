import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E11ProcedimientoPage } from './e11-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E11ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E11ProcedimientoPageRoutingModule {}
