import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6EncargadoPage } from './e6-encargado.page';

const routes: Routes = [
  {
    path: '',
    component: E6EncargadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6EncargadoPageRoutingModule {}
