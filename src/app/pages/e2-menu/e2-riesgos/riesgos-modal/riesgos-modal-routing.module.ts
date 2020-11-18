import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiesgosModalPage } from './riesgos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RiesgosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiesgosModalPageRoutingModule {}
