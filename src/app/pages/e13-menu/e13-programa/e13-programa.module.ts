import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E13ProgramaPageRoutingModule } from './e13-programa-routing.module';

import { E13ProgramaPage } from './e13-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E13ProgramaPageRoutingModule
  ],
  declarations: [E13ProgramaPage]
})
export class E13ProgramaPageModule {}
