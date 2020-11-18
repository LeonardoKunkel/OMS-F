import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiesgosModalPageRoutingModule } from './riesgos-modal-routing.module';

import { RiesgosModalPage } from './riesgos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiesgosModalPageRoutingModule
  ],
  declarations: [RiesgosModalPage]
})
export class RiesgosModalPageModule {}
