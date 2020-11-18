import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E1PoliticaPage } from './e1-politica.page';

const routes: Routes = [
  {
    path: '',
    component: E1PoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E1PoliticaPageRoutingModule {}
