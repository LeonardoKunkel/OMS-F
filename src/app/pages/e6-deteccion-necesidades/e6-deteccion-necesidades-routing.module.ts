import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6DeteccionNecesidadesPage } from './e6-deteccion-necesidades.page';

const routes: Routes = [
  {
    path: '',
    component: E6DeteccionNecesidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6DeteccionNecesidadesPageRoutingModule {}
