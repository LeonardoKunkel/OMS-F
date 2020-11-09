import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E17MenuPage } from './e17-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E17MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E17MenuPageRoutingModule {}
