import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtintoresPage } from './extintores.page';

const routes: Routes = [
  {
    path: '',
    component: ExtintoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtintoresPageRoutingModule {}
