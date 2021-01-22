import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipalPageRoutingModule } from './municipal-routing.module';

import { MunicipalPage } from './municipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunicipalPageRoutingModule
  ],
  declarations: [MunicipalPage]
})
export class MunicipalPageModule {}
