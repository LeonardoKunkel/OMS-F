import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E10ProcedimientoPageRoutingModule } from './e10-procedimiento-routing.module';

import { E10ProcedimientoPage } from './e10-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E10ProcedimientoPageRoutingModule
  ],
  declarations: [E10ProcedimientoPage]
})
export class E10ProcedimientoPageModule {}
