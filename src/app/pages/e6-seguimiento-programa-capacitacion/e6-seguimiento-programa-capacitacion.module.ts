import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6SeguimientoProgramaCapacitacionPageRoutingModule } from './e6-seguimiento-programa-capacitacion-routing.module';

import { E6SeguimientoProgramaCapacitacionPage } from './e6-seguimiento-programa-capacitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6SeguimientoProgramaCapacitacionPageRoutingModule
  ],
  declarations: [E6SeguimientoProgramaCapacitacionPage]
})
export class E6SeguimientoProgramaCapacitacionPageModule {}
