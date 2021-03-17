import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaAnualMantenimientoPage } from './programa-anual-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaAnualMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaAnualMantenimientoPageRoutingModule {}
