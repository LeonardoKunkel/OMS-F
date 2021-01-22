import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7QuejasSugerenciasPageRoutingModule } from './e7-quejas-sugerencias-routing.module';

import { E7QuejasSugerenciasPage } from './e7-quejas-sugerencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7QuejasSugerenciasPageRoutingModule
  ],
  declarations: [E7QuejasSugerenciasPage]
})
export class E7QuejasSugerenciasPageModule {}
