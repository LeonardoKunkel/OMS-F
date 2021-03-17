import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E11PlanMantenimientoPageRoutingModule } from './e11-plan-mantenimiento-routing.module';

import { E11PlanMantenimientoPage } from './e11-plan-mantenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E11PlanMantenimientoPageRoutingModule
  ],
  declarations: [E11PlanMantenimientoPage]
})
export class E11PlanMantenimientoPageModule {}
