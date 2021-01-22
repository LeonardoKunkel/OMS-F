import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FederalPage } from './federal.page';

const routes: Routes = [
  {
    path: '',
    component: FederalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FederalPageRoutingModule {}
