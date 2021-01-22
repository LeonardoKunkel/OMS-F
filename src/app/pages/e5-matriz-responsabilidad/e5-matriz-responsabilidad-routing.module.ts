import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E5MatrizResponsabilidadPage } from './e5-matriz-responsabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: E5MatrizResponsabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E5MatrizResponsabilidadPageRoutingModule {}
