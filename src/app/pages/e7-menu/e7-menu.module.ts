import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E7MenuPageRoutingModule } from './e7-menu-routing.module';

import { E7MenuPage } from './e7-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E7MenuPageRoutingModule
  ],
  declarations: [E7MenuPage]
})
export class E7MenuPageModule {}
