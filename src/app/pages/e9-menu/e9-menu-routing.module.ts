import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E9MenuPage } from './e9-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E9MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E9MenuPageRoutingModule {}
