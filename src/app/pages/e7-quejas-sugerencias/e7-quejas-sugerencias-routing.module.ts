import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7QuejasSugerenciasPage } from './e7-quejas-sugerencias.page';

const routes: Routes = [
  {
    path: '',
    component: E7QuejasSugerenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7QuejasSugerenciasPageRoutingModule {}
