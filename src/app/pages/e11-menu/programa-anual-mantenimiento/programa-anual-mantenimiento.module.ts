import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaAnualMantenimientoPageRoutingModule } from './programa-anual-mantenimiento-routing.module';

import { ProgramaAnualMantenimientoPage } from './programa-anual-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaAnualMantenimientoPageRoutingModule
  ],
  declarations: [ProgramaAnualMantenimientoPage]
})
export class ProgramaAnualMantenimientoPageModule {}
