import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipalModelPage } from './municipal-model.page';

const routes: Routes = [
  {
    path: '',
    component: MunicipalModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunicipalModelPageRoutingModule {}
