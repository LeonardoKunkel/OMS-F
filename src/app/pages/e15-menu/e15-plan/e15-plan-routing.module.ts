import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E15PlanPage } from './e15-plan.page';

const routes: Routes = [
  {
    path: '',
    component: E15PlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E15PlanPageRoutingModule {}
