import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalPage } from './municipal.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipalPageRoutingModule {}
