import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E11ProcedimientoPageRoutingModule } from './e11-procedimiento-routing.module';

import { E11ProcedimientoPage } from './e11-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E11ProcedimientoPageRoutingModule
  ],
  declarations: [E11ProcedimientoPage]
})
export class E11ProcedimientoPageModule {}
