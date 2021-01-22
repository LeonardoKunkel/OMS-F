import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioCrePage } from './calendario-cre.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioCrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioCrePageRoutingModule {}
