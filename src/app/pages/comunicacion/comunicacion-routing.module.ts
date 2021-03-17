import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicacionPage } from './comunicacion.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionPageRoutingModule {}
