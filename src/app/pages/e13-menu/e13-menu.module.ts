import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E13MenuPageRoutingModule } from './e13-menu-routing.module';

import { E13MenuPage } from './e13-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E13MenuPageRoutingModule
  ],
  declarations: [E13MenuPage]
})
export class E13MenuPageModule {}
