import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepresentantePageRoutingModule } from './representante-routing.module';

import { RepresentantePage } from './representante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepresentantePageRoutingModule
  ],
  declarations: [RepresentantePage]
})
export class RepresentantePageModule {}
