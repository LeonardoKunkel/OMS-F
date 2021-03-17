import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E12CartaPageRoutingModule } from './e12-carta-routing.module';

import { E12CartaPage } from './e12-carta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E12CartaPageRoutingModule
  ],
  declarations: [E12CartaPage]
})
export class E12CartaPageModule {}
