import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E5MatrizResponsabilidadPageRoutingModule } from './e5-matriz-responsabilidad-routing.module';

import { E5MatrizResponsabilidadPage } from './e5-matriz-responsabilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E5MatrizResponsabilidadPageRoutingModule
  ],
  declarations: [E5MatrizResponsabilidadPage]
})
export class E5MatrizResponsabilidadPageModule {}
