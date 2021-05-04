import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2AspectosPage } from './e2-aspectos.page';

const routes: Routes = [
  {
    path: '',
    component: E2AspectosPage
  },
  {
    path: 'actividad/:id',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2AspectosPageRoutingModule {}
