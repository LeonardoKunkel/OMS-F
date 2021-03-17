import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E12AnexoPageRoutingModule } from './e12-anexo-routing.module';

import { E12AnexoPage } from './e12-anexo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E12AnexoPageRoutingModule
  ],
  declarations: [E12AnexoPage]
})
export class E12AnexoPageModule {}
