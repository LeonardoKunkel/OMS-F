import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E9ListadoCodigosEstandaresPageRoutingModule } from './e9-listado-codigos-estandares-routing.module';

import { E9ListadoCodigosEstandaresPage } from './e9-listado-codigos-estandares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E9ListadoCodigosEstandaresPageRoutingModule
  ],
  declarations: [E9ListadoCodigosEstandaresPage]
})
export class E9ListadoCodigosEstandaresPageModule {}
