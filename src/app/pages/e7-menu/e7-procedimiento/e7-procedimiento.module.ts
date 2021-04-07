import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7ProcedimientoPageRoutingModule } from './e7-procedimiento-routing.module';

import { E7ProcedimientoPage } from './e7-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7ProcedimientoPageRoutingModule
  ],
  declarations: [E7ProcedimientoPage]
})
export class E7ProcedimientoPageModule {}
