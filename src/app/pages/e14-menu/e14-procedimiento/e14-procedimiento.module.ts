import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E14ProcedimientoPageRoutingModule } from './e14-procedimiento-routing.module';

import { E14ProcedimientoPage } from './e14-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E14ProcedimientoPageRoutingModule
  ],
  declarations: [E14ProcedimientoPage]
})
export class E14ProcedimientoPageModule {}
