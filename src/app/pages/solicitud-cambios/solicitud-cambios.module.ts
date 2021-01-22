import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudCambiosPageRoutingModule } from './solicitud-cambios-routing.module';

import { SolicitudCambiosPage } from './solicitud-cambios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudCambiosPageRoutingModule
  ],
  declarations: [SolicitudCambiosPage]
})
export class SolicitudCambiosPageModule {}
