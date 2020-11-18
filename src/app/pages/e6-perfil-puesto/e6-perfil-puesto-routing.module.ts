import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E6PerfilPuestoPage } from './e6-perfil-puesto.page';

const routes: Routes = [
  {
    path: '',
    component: E6PerfilPuestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E6PerfilPuestoPageRoutingModule {}
