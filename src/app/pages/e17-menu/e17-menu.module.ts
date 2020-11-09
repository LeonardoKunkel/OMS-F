import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E17MenuPageRoutingModule } from './e17-menu-routing.module';

import { E17MenuPage } from './e17-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E17MenuPageRoutingModule
  ],
  declarations: [E17MenuPage]
})
export class E17MenuPageModule {}
