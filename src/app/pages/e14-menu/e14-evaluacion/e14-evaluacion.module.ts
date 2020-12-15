import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E14EvaluacionPageRoutingModule } from './e14-evaluacion-routing.module';

import { E14EvaluacionPage } from './e14-evaluacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E14EvaluacionPageRoutingModule
  ],
  declarations: [E14EvaluacionPage]
})
export class E14EvaluacionPageModule {}
