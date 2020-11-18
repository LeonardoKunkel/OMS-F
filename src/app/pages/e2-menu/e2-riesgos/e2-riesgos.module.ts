import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E2RiesgosPageRoutingModule } from './e2-riesgos-routing.module';

import { E2RiesgosPage } from './e2-riesgos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E2RiesgosPageRoutingModule
  ],
  declarations: [E2RiesgosPage]
})
export class E2RiesgosPageModule {}
