import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E3MenuPage } from './e3-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E3MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E3MenuPageRoutingModule {}
