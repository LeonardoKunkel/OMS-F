import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudInformacionPageRoutingModule } from './solicitud-informacion-routing.module';

import { SolicitudInformacionPage } from './solicitud-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudInformacionPageRoutingModule
  ],
  declarations: [SolicitudInformacionPage]
})
export class SolicitudInformacionPageModule {}
