import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E15MenuPageRoutingModule } from './e15-menu-routing.module';

import { E15MenuPage } from './e15-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E15MenuPageRoutingModule
  ],
  declarations: [E15MenuPage]
})
export class E15MenuPageModule {}
