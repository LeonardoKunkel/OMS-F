import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E16ProcedimientoPageRoutingModule } from './e16-procedimiento-routing.module';

import { E16ProcedimientoPage } from './e16-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E16ProcedimientoPageRoutingModule
  ],
  declarations: [E16ProcedimientoPage]
})
export class E16ProcedimientoPageModule {}
