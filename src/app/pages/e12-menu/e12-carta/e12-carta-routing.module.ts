import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E12CartaPage } from './e12-carta.page';

const routes: Routes = [
  {
    path: '',
    component: E12CartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E12CartaPageRoutingModule {}
