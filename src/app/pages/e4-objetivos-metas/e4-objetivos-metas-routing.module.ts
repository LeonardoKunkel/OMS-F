import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E4ObjetivosMetasPage } from './e4-objetivos-metas.page';

const routes: Routes = [
  {
    path: '',
    component: E4ObjetivosMetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E4ObjetivosMetasPageRoutingModule {}
