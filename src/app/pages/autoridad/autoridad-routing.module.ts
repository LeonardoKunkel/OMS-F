import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoridadPage } from './autoridad.page';

const routes: Routes = [
  {
    path: '',
    component: AutoridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoridadPageRoutingModule {}
