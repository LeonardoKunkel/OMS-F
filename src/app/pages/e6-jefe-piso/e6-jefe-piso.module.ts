import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6JefePisoPageRoutingModule } from './e6-jefe-piso-routing.module';

import { E6JefePisoPage } from './e6-jefe-piso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6JefePisoPageRoutingModule
  ],
  declarations: [E6JefePisoPage]
})
export class E6JefePisoPageModule {}
