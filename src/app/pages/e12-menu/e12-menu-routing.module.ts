import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E12MenuPage } from './e12-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E12MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E12MenuPageRoutingModule {}
