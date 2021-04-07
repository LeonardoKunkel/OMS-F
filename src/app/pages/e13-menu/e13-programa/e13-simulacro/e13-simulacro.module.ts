import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E13SimulacroPageRoutingModule } from './e13-simulacro-routing.module';

import { E13SimulacroPage } from './e13-simulacro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E13SimulacroPageRoutingModule
  ],
  declarations: [E13SimulacroPage]
})
export class E13SimulacroPageModule {}
