import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipalModelPageRoutingModule } from './municipal-model-routing.module';

import { MunicipalModelPage } from './municipal-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunicipalModelPageRoutingModule
  ],
  declarations: [MunicipalModelPage]
})
export class MunicipalModelPageModule {}
