import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E9MenuPageRoutingModule } from './e9-menu-routing.module';

import { E9MenuPage } from './e9-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E9MenuPageRoutingModule
  ],
  declarations: [E9MenuPage]
})
export class E9MenuPageModule {}
