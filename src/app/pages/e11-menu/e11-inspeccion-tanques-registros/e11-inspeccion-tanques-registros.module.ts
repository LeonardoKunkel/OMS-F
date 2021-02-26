import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E11InspeccionTanquesRegistrosPageRoutingModule } from './e11-inspeccion-tanques-registros-routing.module';

import { E11InspeccionTanquesRegistrosPage } from './e11-inspeccion-tanques-registros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E11InspeccionTanquesRegistrosPageRoutingModule
  ],
  declarations: [E11InspeccionTanquesRegistrosPage]
})
export class E11InspeccionTanquesRegistrosPageModule {}
