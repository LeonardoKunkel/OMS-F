import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepresentanteReadPageRoutingModule } from './representante-read-routing.module';

import { RepresentanteReadPage } from './representante-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepresentanteReadPageRoutingModule
  ],
  declarations: [RepresentanteReadPage]
})
export class RepresentanteReadPageModule {}
