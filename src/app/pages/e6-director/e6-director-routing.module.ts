import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6DirectorPage } from './e6-director.page';

const routes: Routes = [
  {
    path: '',
    component: E6DirectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6DirectorPageRoutingModule {}
