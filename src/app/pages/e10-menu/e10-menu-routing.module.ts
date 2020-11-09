import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E10MenuPage } from './e10-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E10MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E10MenuPageRoutingModule {}
