import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicacionPageRoutingModule } from './comunicacion-routing.module';

import { ComunicacionPage } from './comunicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicacionPageRoutingModule
  ],
  declarations: [ComunicacionPage]
})
export class ComunicacionPageModule {}
