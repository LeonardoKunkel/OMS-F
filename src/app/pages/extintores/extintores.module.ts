import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtintoresPageRoutingModule } from './extintores-routing.module';

import { ExtintoresPage } from './extintores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtintoresPageRoutingModule
  ],
  declarations: [ExtintoresPage]
})
export class ExtintoresPageModule {}
