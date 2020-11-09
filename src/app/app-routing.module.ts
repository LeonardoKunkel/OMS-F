import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
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
  },  {
    path: 'estacion-read',
    loadChildren: () => import('./pages/estacion-read/estacion-read.module').then( m => m.EstacionReadPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

