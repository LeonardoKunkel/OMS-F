import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E13MenuPage } from './e13-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E13MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E13MenuPageRoutingModule {}
