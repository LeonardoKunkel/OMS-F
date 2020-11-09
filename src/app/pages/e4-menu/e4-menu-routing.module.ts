import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E4MenuPage } from './e4-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E4MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E4MenuPageRoutingModule {}
