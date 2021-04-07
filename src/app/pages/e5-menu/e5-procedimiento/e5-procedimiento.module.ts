import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E5ProcedimientoPageRoutingModule } from './e5-procedimiento-routing.module';

import { E5ProcedimientoPage } from './e5-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E5ProcedimientoPageRoutingModule
  ],
  declarations: [E5ProcedimientoPage]
})
export class E5ProcedimientoPageModule {}
