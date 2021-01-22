import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudCambiosPage } from './solicitud-cambios.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudCambiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudCambiosPageRoutingModule {}
