import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E15PlanPageRoutingModule } from './e15-plan-routing.module';

import { E15PlanPage } from './e15-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E15PlanPageRoutingModule
  ],
  declarations: [E15PlanPage]
})
export class E15PlanPageModule {}
