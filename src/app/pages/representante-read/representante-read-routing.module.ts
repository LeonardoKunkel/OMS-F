import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentanteReadPage } from './representante-read.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentanteReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentanteReadPageRoutingModule {}
