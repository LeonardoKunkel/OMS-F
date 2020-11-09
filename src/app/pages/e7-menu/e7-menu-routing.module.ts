import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7MenuPage } from './e7-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E7MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7MenuPageRoutingModule {}
