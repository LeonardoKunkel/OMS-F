import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E8MenuPageRoutingModule } from './e8-menu-routing.module';

import { E8MenuPage } from './e8-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E8MenuPageRoutingModule
  ],
  declarations: [E8MenuPage]
})
export class E8MenuPageModule {}
