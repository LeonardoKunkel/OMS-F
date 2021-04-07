import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6ProcedimientoPageRoutingModule } from './e6-procedimiento-routing.module';

import { E6ProcedimientoPage } from './e6-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6ProcedimientoPageRoutingModule
  ],
  declarations: [E6ProcedimientoPage]
})
export class E6ProcedimientoPageModule {}
