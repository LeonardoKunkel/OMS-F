import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E10MenuPageRoutingModule } from './e10-menu-routing.module';

import { E10MenuPage } from './e10-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E10MenuPageRoutingModule
  ],
  declarations: [E10MenuPage]
})
export class E10MenuPageModule {}
