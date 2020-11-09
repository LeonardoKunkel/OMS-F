import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E3MenuPageRoutingModule } from './e3-menu-routing.module';

import { E3MenuPage } from './e3-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E3MenuPageRoutingModule
  ],
  declarations: [E3MenuPage]
})
export class E3MenuPageModule {}
