import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E8SolicitudCambiosPageRoutingModule } from './e8-solicitud-cambios-routing.module';

import { E8SolicitudCambiosPage } from './e8-solicitud-cambios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E8SolicitudCambiosPageRoutingModule
  ],
  declarations: [E8SolicitudCambiosPage]
})
export class E8SolicitudCambiosPageModule {}
