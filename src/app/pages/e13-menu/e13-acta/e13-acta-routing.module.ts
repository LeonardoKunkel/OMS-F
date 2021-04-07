import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E13ActaPage } from './e13-acta.page';

const routes: Routes = [
  {
    path: '',
    component: E13ActaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E13ActaPageRoutingModule {}
