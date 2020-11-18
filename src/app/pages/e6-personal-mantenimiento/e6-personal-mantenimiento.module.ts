import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6PersonalMantenimientoPageRoutingModule } from './e6-personal-mantenimiento-routing.module';

import { E6PersonalMantenimientoPage } from './e6-personal-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6PersonalMantenimientoPageRoutingModule
  ],
  declarations: [E6PersonalMantenimientoPage]
})
export class E6PersonalMantenimientoPageModule {}
