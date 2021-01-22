import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatalPage } from './estatal.page';

const routes: Routes = [
  {
    path: '',
    component: EstatalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatalPageRoutingModule {}
