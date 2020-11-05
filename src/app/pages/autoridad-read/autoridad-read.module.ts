import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoridadReadPageRoutingModule } from './autoridad-read-routing.module';

import { AutoridadReadPage } from './autoridad-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoridadReadPageRoutingModule
  ],
  declarations: [AutoridadReadPage]
})
export class AutoridadReadPageModule {}
