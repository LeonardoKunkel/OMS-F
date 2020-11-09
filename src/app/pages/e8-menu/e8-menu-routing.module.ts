import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E8MenuPage } from './e8-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E8MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E8MenuPageRoutingModule {}
