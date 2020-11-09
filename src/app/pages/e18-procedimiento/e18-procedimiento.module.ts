import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E18ProcedimientoPageRoutingModule } from './e18-procedimiento-routing.module';

import { E18ProcedimientoPage } from './e18-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E18ProcedimientoPageRoutingModule
  ],
  declarations: [E18ProcedimientoPage]
})
export class E18ProcedimientoPageModule {}
