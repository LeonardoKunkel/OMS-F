import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E15ProcedimientoPageRoutingModule } from './e15-procedimiento-routing.module';

import { E15ProcedimientoPage } from './e15-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E15ProcedimientoPageRoutingModule
  ],
  declarations: [E15ProcedimientoPage]
})
export class E15ProcedimientoPageModule {}
