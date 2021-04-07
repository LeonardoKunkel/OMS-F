import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E17ProcedimientoPage } from './e17-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E17ProcedimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E17ProcedimientoPageRoutingModule {}
