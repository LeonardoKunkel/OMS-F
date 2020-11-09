import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E11MenuPageRoutingModule } from './e11-menu-routing.module';

import { E11MenuPage } from './e11-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E11MenuPageRoutingModule
  ],
  declarations: [E11MenuPage]
})
export class E11MenuPageModule {}
