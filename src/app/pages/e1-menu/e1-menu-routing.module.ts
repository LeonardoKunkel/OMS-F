import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E1MenuPage } from './e1-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E1MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E1MenuPageRoutingModule {}
