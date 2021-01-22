import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatalPageRoutingModule } from './estatal-routing.module';

import { EstatalPage } from './estatal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatalPageRoutingModule
  ],
  declarations: [EstatalPage]
})
export class EstatalPageModule {}
