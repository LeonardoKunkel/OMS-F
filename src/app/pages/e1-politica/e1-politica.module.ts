import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E1PoliticaPageRoutingModule } from './e1-politica-routing.module';

import { E1PoliticaPage } from './e1-politica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E1PoliticaPageRoutingModule
  ],
  declarations: [E1PoliticaPage]
})
export class E1PoliticaPageModule {}
