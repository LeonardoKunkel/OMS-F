import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6ProgramaCapacitacionPageRoutingModule } from './e6-programa-capacitacion-routing.module';

import { E6ProgramaCapacitacionPage } from './e6-programa-capacitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6ProgramaCapacitacionPageRoutingModule
  ],
  declarations: [E6ProgramaCapacitacionPage]
})
export class E6ProgramaCapacitacionPageModule {}
