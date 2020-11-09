import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E16MenuPageRoutingModule } from './e16-menu-routing.module';

import { E16MenuPage } from './e16-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E16MenuPageRoutingModule
  ],
  declarations: [E16MenuPage]
})
export class E16MenuPageModule {}
