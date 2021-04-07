import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E15InformePageRoutingModule } from './e15-informe-routing.module';

import { E15InformePage } from './e15-informe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E15InformePageRoutingModule
  ],
  declarations: [E15InformePage]
})
export class E15InformePageModule {}
