import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E14MenuPage } from './e14-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E14MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E14MenuPageRoutingModule {}
