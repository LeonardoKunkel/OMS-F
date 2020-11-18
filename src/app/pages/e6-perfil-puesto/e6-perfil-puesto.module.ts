import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6PerfilPuestoPageRoutingModule } from './e6-perfil-puesto-routing.module';

import { E6PerfilPuestoPage } from './e6-perfil-puesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6PerfilPuestoPageRoutingModule
  ],
  declarations: [E6PerfilPuestoPage]
})
export class E6PerfilPuestoPageModule {}
