import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2RiesgosPage } from './e2-riesgos.page';

const routes: Routes = [
  {
    path: '',
    component: E2RiesgosPage
  },
  {
    path: 'riesgos-modal',
    loadChildren: () => import('./riesgos-modal/riesgos-modal.module').then( m => m.RiesgosModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2RiesgosPageRoutingModule {}
