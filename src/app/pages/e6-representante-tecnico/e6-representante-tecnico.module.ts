import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6RepresentanteTecnicoPageRoutingModule } from './e6-representante-tecnico-routing.module';

import { E6RepresentanteTecnicoPage } from './e6-representante-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6RepresentanteTecnicoPageRoutingModule
  ],
  declarations: [E6RepresentanteTecnicoPage]
})
export class E6RepresentanteTecnicoPageModule {}
