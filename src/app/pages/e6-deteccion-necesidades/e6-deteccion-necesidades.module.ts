import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6DeteccionNecesidadesPageRoutingModule } from './e6-deteccion-necesidades-routing.module';

import { E6DeteccionNecesidadesPage } from './e6-deteccion-necesidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6DeteccionNecesidadesPageRoutingModule
  ],
  declarations: [E6DeteccionNecesidadesPage]
})
export class E6DeteccionNecesidadesPageModule {}
