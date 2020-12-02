import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7ListaPageRoutingModule } from './e7-lista-routing.module';

import { E7ListaPage } from './e7-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7ListaPageRoutingModule
  ],
  declarations: [E7ListaPage]
})
export class E7ListaPageModule {}
