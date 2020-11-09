import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E4MenuPageRoutingModule } from './e4-menu-routing.module';

import { E4MenuPage } from './e4-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E4MenuPageRoutingModule
  ],
  declarations: [E4MenuPage]
})
export class E4MenuPageModule {}
