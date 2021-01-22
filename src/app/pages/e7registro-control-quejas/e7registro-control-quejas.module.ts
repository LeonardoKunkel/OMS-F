import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7registroControlQuejasPageRoutingModule } from './e7registro-control-quejas-routing.module';

import { E7registroControlQuejasPage } from './e7registro-control-quejas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7registroControlQuejasPageRoutingModule
  ],
  declarations: [E7registroControlQuejasPage]
})
export class E7registroControlQuejasPageModule {}
