import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E1MenuPageRoutingModule } from './e1-menu-routing.module';

import { E1MenuPage } from './e1-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E1MenuPageRoutingModule
  ],
  declarations: [E1MenuPage]
})
export class E1MenuPageModule {}
