import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E14MenuPageRoutingModule } from './e14-menu-routing.module';

import { E14MenuPage } from './e14-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E14MenuPageRoutingModule
  ],
  declarations: [E14MenuPage]
})
export class E14MenuPageModule {}
