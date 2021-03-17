import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E12MenuPage } from './e12-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E12MenuPage
  },  {
    path: 'e12-anexo',
    loadChildren: () => import('./e12-anexo/e12-anexo.module').then( m => m.E12AnexoPageModule)
  },
  {
    path: 'e12-carta',
    loadChildren: () => import('./e12-carta/e12-carta.module').then( m => m.E12CartaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E12MenuPageRoutingModule {}
