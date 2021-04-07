import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E1ProcedimientoPageRoutingModule } from './e1-procedimiento-routing.module';

import { E1ProcedimientoPage } from './e1-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E1ProcedimientoPageRoutingModule
  ],
  declarations: [E1ProcedimientoPage]
})
export class E1ProcedimientoPageModule {}
