import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E2ProcedimientoPageRoutingModule } from './e2-procedimiento-routing.module';

import { E2ProcedimientoPage } from './e2-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E2ProcedimientoPageRoutingModule
  ],
  declarations: [E2ProcedimientoPage]
})
export class E2ProcedimientoPageModule {}
