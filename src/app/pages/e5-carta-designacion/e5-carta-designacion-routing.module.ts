import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E5CartaDesignacionPage } from './e5-carta-designacion.page';

const routes: Routes = [
  {
    path: '',
    component: E5CartaDesignacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E5CartaDesignacionPageRoutingModule {}
