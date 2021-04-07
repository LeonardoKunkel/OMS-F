import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E13ProgramaPage } from './e13-programa.page';

const routes: Routes = [
  {
    path: '',
    component: E13ProgramaPage
  },
  {
    path: 'e13-simulacro',
    loadChildren: () => import('./e13-simulacro/e13-simulacro.module').then( m => m.E13SimulacroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E13ProgramaPageRoutingModule {}
