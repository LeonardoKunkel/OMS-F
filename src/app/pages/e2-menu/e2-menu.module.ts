import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E2MenuPageRoutingModule } from './e2-menu-routing.module';

import { E2MenuPage } from './e2-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E2MenuPageRoutingModule
  ],
  declarations: [E2MenuPage]
})
export class E2MenuPageModule {}
