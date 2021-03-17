import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensoresPageRoutingModule } from './sensores-routing.module';

import { SensoresPage } from './sensores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensoresPageRoutingModule
  ],
  declarations: [SensoresPage]
})
export class SensoresPageModule {}
