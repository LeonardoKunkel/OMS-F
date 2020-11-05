import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionPage } from './estacion.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionPageRoutingModule {}
