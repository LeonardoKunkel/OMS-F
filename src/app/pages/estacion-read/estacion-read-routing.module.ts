import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionReadPage } from './estacion-read.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionReadPageRoutingModule {}
