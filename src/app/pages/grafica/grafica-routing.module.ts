import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficaPage } from './grafica.page';

const routes: Routes = [
  {
    path: '',
    component: GraficaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficaPageRoutingModule {}
