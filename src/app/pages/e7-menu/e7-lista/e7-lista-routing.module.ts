import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7ListaPage } from './e7-lista.page';

const routes: Routes = [
  {
    path: '',
    component: E7ListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7ListaPageRoutingModule {}
