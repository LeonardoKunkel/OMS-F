import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoridadReadPage } from './autoridad-read.page';

const routes: Routes = [
  {
    path: '',
    component: AutoridadReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoridadReadPageRoutingModule {}
