import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6RepresentanteTecnicoPage } from './e6-representante-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: E6RepresentanteTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6RepresentanteTecnicoPageRoutingModule {}
