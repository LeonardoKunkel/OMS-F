import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E5MenuPage } from './e5-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E5MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E5MenuPageRoutingModule {}
