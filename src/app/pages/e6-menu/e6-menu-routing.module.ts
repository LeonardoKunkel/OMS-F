import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6MenuPage } from './e6-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E6MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6MenuPageRoutingModule {}
