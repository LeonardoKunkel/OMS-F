import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E13ActaPageRoutingModule } from './e13-acta-routing.module';

import { E13ActaPage } from './e13-acta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E13ActaPageRoutingModule
  ],
  declarations: [E13ActaPage]
})
export class E13ActaPageModule {}
