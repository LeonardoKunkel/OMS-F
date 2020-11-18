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
  },
  {
    path: 'e18-procedimiento',
    loadChildren: () => import('./pages/e18-procedimiento/e18-procedimiento.module').then( m => m.E18ProcedimientoPageModule)
  },
  {
    path: 'e1-menu',
    loadChildren: () => import('./pages/e1-menu/e1-menu.module').then( m => m.E1MenuPageModule)
  },
  {
    path: 'e2-menu',
    loadChildren: () => import('./pages/e2-menu/e2-menu.module').then( m => m.E2MenuPageModule)
  },
  {
    path: 'e3-menu',
    loadChildren: () => import('./pages/e3-menu/e3-menu.module').then( m => m.E3MenuPageModule)
  },
  {
    path: 'e4-menu',
    loadChildren: () => import('./pages/e4-menu/e4-menu.module').then( m => m.E4MenuPageModule)
  },
  {
    path: 'e5-menu',
    loadChildren: () => import('./pages/e5-menu/e5-menu.module').then( m => m.E5MenuPageModule)
  },
  {
    path: 'e6-menu',
    loadChildren: () => import('./pages/e6-menu/e6-menu.module').then( m => m.E6MenuPageModule)
  },
  {
    path: 'e7-menu',
    loadChildren: () => import('./pages/e7-menu/e7-menu.module').then( m => m.E7MenuPageModule)
  },
  {
    path: 'e8-menu',
    loadChildren: () => import('./pages/e8-menu/e8-menu.module').then( m => m.E8MenuPageModule)
  },
  {
    path: 'e9-menu',
    loadChildren: () => import('./pages/e9-menu/e9-menu.module').then( m => m.E9MenuPageModule)
  },
  {
    path: 'e10-menu',
    loadChildren: () => import('./pages/e10-menu/e10-menu.module').then( m => m.E10MenuPageModule)
  },
  {
    path: 'e11-menu',
    loadChildren: () => import('./pages/e11-menu/e11-menu.module').then( m => m.E11MenuPageModule)
  },
  {
    path: 'e12-menu',
    loadChildren: () => import('./pages/e12-menu/e12-menu.module').then( m => m.E12MenuPageModule)
  },
  {
    path: 'e13-menu',
    loadChildren: () => import('./pages/e13-menu/e13-menu.module').then( m => m.E13MenuPageModule)
  },
  {
    path: 'e14-menu',
    loadChildren: () => import('./pages/e14-menu/e14-menu.module').then( m => m.E14MenuPageModule)
  },
  {
    path: 'e15-menu',
    loadChildren: () => import('./pages/e15-menu/e15-menu.module').then( m => m.E15MenuPageModule)
  },
  {
    path: 'e16-menu',
    loadChildren: () => import('./pages/e16-menu/e16-menu.module').then( m => m.E16MenuPageModule)
  },
  {
    path: 'e17-menu',
    loadChildren: () => import('./pages/e17-menu/e17-menu.module').then( m => m.E17MenuPageModule)
  },
  {
    path: 'estacion-read',
    loadChildren: () => import('./pages/estacion-read/estacion-read.module').then( m => m.EstacionReadPageModule)
  },  {
    path: 'e1-politica',
    loadChildren: () => import('./pages/e1-politica/e1-politica.module').then( m => m.E1PoliticaPageModule)
  },
  {
    path: 'grafica',
    loadChildren: () => import('./pages/grafica/grafica.module').then( m => m.GraficaPageModule)
  },
  {
    path: 'e4-objetivos-metas',
    loadChildren: () => import('./pages/e4-objetivos-metas/e4-objetivos-metas.module').then( m => m.E4ObjetivosMetasPageModule)
  },
  {
    path: 'e6-perfil-puesto',
    loadChildren: () => import('./pages/e6-perfil-puesto/e6-perfil-puesto.module').then( m => m.E6PerfilPuestoPageModule)
  },
  {
    path: 'e6-director',
    loadChildren: () => import('./pages/e6-director/e6-director.module').then( m => m.E6DirectorPageModule)
  },
  {
    path: 'e6-representante-tecnico',
    loadChildren: () => import('./pages/e6-representante-tecnico/e6-representante-tecnico.module').then( m => m.E6RepresentanteTecnicoPageModule)
  },
  {
    path: 'e6-encargado',
    loadChildren: () => import('./pages/e6-encargado/e6-encargado.module').then( m => m.E6EncargadoPageModule)
  },
  {
    path: 'e6-jefe-piso',
    loadChildren: () => import('./pages/e6-jefe-piso/e6-jefe-piso.module').then( m => m.E6JefePisoPageModule)
  },
  {
    path: 'e6-despachadores',
    loadChildren: () => import('./pages/e6-despachadores/e6-despachadores.module').then( m => m.E6DespachadoresPageModule)
  },
  {
    path: 'e6-personal-mantenimiento',
    loadChildren: () => import('./pages/e6-personal-mantenimiento/e6-personal-mantenimiento.module').then( m => m.E6PersonalMantenimientoPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

