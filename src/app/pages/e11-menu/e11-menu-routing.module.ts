import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E11MenuPage } from './e11-menu.page';

const routes: Routes = [
  {
    path: '',
    component: E11MenuPage
  },
  {
    path: 'e11-lista',
    loadChildren: () => import('./e11-lista/e11-lista.module').then( m => m.E11ListaPageModule)
  },
  {
    path: 'e11-inspeccion-tanques-registros',
    loadChildren: () => import('./e11-inspeccion-tanques-registros/e11-inspeccion-tanques-registros.module').then( m => m.E11InspeccionTanquesRegistrosPageModule)
  },  {
    path: 'programa-anual-mantenimiento',
    loadChildren: () => import('./programa-anual-mantenimiento/programa-anual-mantenimiento.module').then( m => m.ProgramaAnualMantenimientoPageModule)
  },
  {
    path: 'e11-plan-mantenimiento',
    loadChildren: () => import('./e11-plan-mantenimiento/e11-plan-mantenimiento.module').then( m => m.E11PlanMantenimientoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E11MenuPageRoutingModule {}
