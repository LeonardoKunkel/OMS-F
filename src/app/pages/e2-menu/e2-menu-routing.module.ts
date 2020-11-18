import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E2MenuPage } from './e2-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E2MenuPage
  },  {
    path: 'e2-riesgos',
    loadChildren: () => import('./e2-riesgos/e2-riesgos.module').then( m => m.E2RiesgosPageModule)
  },
  {
    path: 'e2-aspectos',
    loadChildren: () => import('./e2-aspectos/e2-aspectos.module').then( m => m.E2AspectosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E2MenuPageRoutingModule {}
