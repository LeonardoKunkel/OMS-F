import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6EncargadoPageRoutingModule } from './e6-encargado-routing.module';

import { E6EncargadoPage } from './e6-encargado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6EncargadoPageRoutingModule
  ],
  declarations: [E6EncargadoPage]
})
export class E6EncargadoPageModule {}
