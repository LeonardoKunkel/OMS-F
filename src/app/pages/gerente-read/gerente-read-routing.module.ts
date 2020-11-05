import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenteReadPage } from './gerente-read.page';

const routes: Routes = [
  {
    path: '',
    component: GerenteReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenteReadPageRoutingModule {}
