import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenteReadPageRoutingModule } from './gerente-read-routing.module';

import { GerenteReadPage } from './gerente-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenteReadPageRoutingModule
  ],
  declarations: [GerenteReadPage]
})
export class GerenteReadPageModule {}
