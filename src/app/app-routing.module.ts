import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'representante',
    loadChildren: () => import('./pages/representante/representante.module').then( m => m.RepresentantePageModule)
  },
  {
    path: 'gerente',
    loadChildren: () => import('./pages/gerente/gerente.module').then( m => m.GerentePageModule)
  },
  {
    path: 'autoridad',
    loadChildren: () => import('./pages/autoridad/autoridad.module').then( m => m.AutoridadPageModule)
  },
  {
    path: 'autoridad-read',
    loadChildren: () => import('./pages/autoridad-read/autoridad-read.module').then( m => m.AutoridadReadPageModule)
  },
  {
    path: 'representante-read',
    loadChildren: () => import('./pages/representante-read/representante-read.module').then( m => m.RepresentanteReadPageModule)
  },
  {
    path: 'gerente-read',
    loadChildren: () => import('./pages/gerente-read/gerente-read.module').then( m => m.GerenteReadPageModule)
  },
  {
    path: 'estacion',
    loadChildren: () => import('./pages/estacion/estacion.module').then( m => m.EstacionPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
