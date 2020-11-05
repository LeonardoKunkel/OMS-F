import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentantePage } from './representante.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentantePageRoutingModule {}
