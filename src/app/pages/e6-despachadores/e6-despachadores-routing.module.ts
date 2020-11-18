import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6DespachadoresPage } from './e6-despachadores.page';

const routes: Routes = [
  {
    path: '',
    component: E6DespachadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6DespachadoresPageRoutingModule {}
