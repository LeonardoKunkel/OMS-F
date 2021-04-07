import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E4ProcedimientoPageRoutingModule } from './e4-procedimiento-routing.module';

import { E4ProcedimientoPage } from './e4-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E4ProcedimientoPageRoutingModule
  ],
  declarations: [E4ProcedimientoPage]
})
export class E4ProcedimientoPageModule {}
