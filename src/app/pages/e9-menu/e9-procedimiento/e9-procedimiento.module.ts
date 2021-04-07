import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E9ProcedimientoPageRoutingModule } from './e9-procedimiento-routing.module';

import { E9ProcedimientoPage } from './e9-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E9ProcedimientoPageRoutingModule
  ],
  declarations: [E9ProcedimientoPage]
})
export class E9ProcedimientoPageModule {}
