import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2MenuPage } from './e2-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E2MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2MenuPageRoutingModule {}
