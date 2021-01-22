import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6ProgramaCapacitacionPage } from './e6-programa-capacitacion.page';

const routes: Routes = [
  {
    path: '',
    component: E6ProgramaCapacitacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6ProgramaCapacitacionPageRoutingModule {}
