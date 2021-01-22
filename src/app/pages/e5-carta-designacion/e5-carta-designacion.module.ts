import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E5CartaDesignacionPageRoutingModule } from './e5-carta-designacion-routing.module';

import { E5CartaDesignacionPage } from './e5-carta-designacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E5CartaDesignacionPageRoutingModule
  ],
  declarations: [E5CartaDesignacionPage]
})
export class E5CartaDesignacionPageModule {}
