import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E15MenuPage } from './e15-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E15MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E15MenuPageRoutingModule {}
