import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatalModelPageRoutingModule } from './estatal-model-routing.module';

import { EstatalModelPage } from './estatal-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatalModelPageRoutingModule
  ],
  declarations: [EstatalModelPage]
})
export class EstatalModelPageModule {}
