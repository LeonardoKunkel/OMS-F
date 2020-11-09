import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E12MenuPageRoutingModule } from './e12-menu-routing.module';

import { E12MenuPage } from './e12-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E12MenuPageRoutingModule
  ],
  declarations: [E12MenuPage]
})
export class E12MenuPageModule {}
