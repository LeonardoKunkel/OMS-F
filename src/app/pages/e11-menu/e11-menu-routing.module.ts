import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E11MenuPage } from './e11-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E11MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E11MenuPageRoutingModule {}
