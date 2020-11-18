import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6PersonalMantenimientoPage } from './e6-personal-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: E6PersonalMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6PersonalMantenimientoPageRoutingModule {}
