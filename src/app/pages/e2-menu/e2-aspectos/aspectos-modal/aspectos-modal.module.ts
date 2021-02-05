import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AspectosModalPageRoutingModule } from './aspectos-modal-routing.module';

import { AspectosModalPage } from './aspectos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule,
    AspectosModalPageRoutingModule
  ],
  declarations: [AspectosModalPage]
})
export class AspectosModalPageModule {}
