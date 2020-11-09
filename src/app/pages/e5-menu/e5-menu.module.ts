import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E5MenuPageRoutingModule } from './e5-menu-routing.module';

import { E5MenuPage } from './e5-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E5MenuPageRoutingModule
  ],
  declarations: [E5MenuPage]
})
export class E5MenuPageModule {}
