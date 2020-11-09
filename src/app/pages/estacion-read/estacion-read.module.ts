import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionReadPageRoutingModule } from './estacion-read-routing.module';

import { EstacionReadPage } from './estacion-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionReadPageRoutingModule
  ],
  declarations: [EstacionReadPage]
})
export class EstacionReadPageModule {}
