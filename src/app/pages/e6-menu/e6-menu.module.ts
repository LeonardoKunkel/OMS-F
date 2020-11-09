import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6MenuPageRoutingModule } from './e6-menu-routing.module';

import { E6MenuPage } from './e6-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6MenuPageRoutingModule
  ],
  declarations: [E6MenuPage]
})
export class E6MenuPageModule {}
