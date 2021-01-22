import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FederalModelPage } from './federal-model.page';

const routes: Routes = [
  {
    path: '',
    component: FederalModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FederalModelPageRoutingModule {}
