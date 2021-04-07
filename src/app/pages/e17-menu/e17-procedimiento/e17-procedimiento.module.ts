import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E17ProcedimientoPageRoutingModule } from './e17-procedimiento-routing.module';

import { E17ProcedimientoPage } from './e17-procedimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E17ProcedimientoPageRoutingModule
  ],
  declarations: [E17ProcedimientoPage]
})
export class E17ProcedimientoPageModule {}
