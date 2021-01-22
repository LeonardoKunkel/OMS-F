import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E3RequisitosLegalesPageRoutingModule } from './e3-requisitos-legales-routing.module';

import { E3RequisitosLegalesPage } from './e3-requisitos-legales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E3RequisitosLegalesPageRoutingModule
  ],
  declarations: [E3RequisitosLegalesPage]
})
export class E3RequisitosLegalesPageModule {}
