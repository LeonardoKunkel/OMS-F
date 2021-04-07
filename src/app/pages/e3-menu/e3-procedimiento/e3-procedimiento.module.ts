import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E3ProcedimientoPageRoutingModule } from './e3-procedimiento-routing.module';

import { E3ProcedimientoPage } from './e3-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E3ProcedimientoPageRoutingModule
  ],
  declarations: [E3ProcedimientoPage]
})
export class E3ProcedimientoPageModule {}
