import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudInformacionPage } from './solicitud-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudInformacionPageRoutingModule {}
