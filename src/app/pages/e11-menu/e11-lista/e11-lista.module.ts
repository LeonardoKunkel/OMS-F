import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E11ListaPageRoutingModule } from './e11-lista-routing.module';

import { E11ListaPage } from './e11-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E11ListaPageRoutingModule
  ],
  declarations: [E11ListaPage]
})
export class E11ListaPageModule {}
