import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E8ProcedimientoPageRoutingModule } from './e8-procedimiento-routing.module';

import { E8ProcedimientoPage } from './e8-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E8ProcedimientoPageRoutingModule
  ],
  declarations: [E8ProcedimientoPage]
})
export class E8ProcedimientoPageModule {}
