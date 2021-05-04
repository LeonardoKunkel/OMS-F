import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSasisopaPageRoutingModule } from './menu-sasisopa-routing.module';

import { MenuSasisopaPage } from './menu-sasisopa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSasisopaPageRoutingModule
  ],
  declarations: [MenuSasisopaPage]
})
export class MenuSasisopaPageModule {}
