import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E8SolicitudCambiosPage } from './e8-solicitud-cambios.page';

const routes: Routes = [
  {
    path: '',
    component: E8SolicitudCambiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E8SolicitudCambiosPageRoutingModule {}
