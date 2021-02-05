import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspectosModalPage } from './aspectos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AspectosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspectosModalPageRoutingModule {}
