import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E13ProcedimientoPageRoutingModule } from './e13-procedimiento-routing.module';

import { E13ProcedimientoPage } from './e13-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E13ProcedimientoPageRoutingModule
  ],
  declarations: [E13ProcedimientoPage]
})
export class E13ProcedimientoPageModule {}
