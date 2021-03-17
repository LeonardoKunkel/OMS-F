import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E12AnexoPage } from './e12-anexo.page';

const routes: Routes = [
  {
    path: '',
    component: E12AnexoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E12AnexoPageRoutingModule {}
