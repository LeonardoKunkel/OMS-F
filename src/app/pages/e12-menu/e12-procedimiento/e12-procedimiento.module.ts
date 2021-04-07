import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E12ProcedimientoPageRoutingModule } from './e12-procedimiento-routing.module';

import { E12ProcedimientoPage } from './e12-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E12ProcedimientoPageRoutingModule
  ],
  declarations: [E12ProcedimientoPage]
})
export class E12ProcedimientoPageModule {}
