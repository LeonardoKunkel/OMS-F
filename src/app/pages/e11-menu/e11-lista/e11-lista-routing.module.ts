import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E11ListaPage } from './e11-lista.page';

const routes: Routes = [
  {
    path: '',
    component: E11ListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E11ListaPageRoutingModule {}
