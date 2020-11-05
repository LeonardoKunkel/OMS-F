import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoridadPageRoutingModule } from './autoridad-routing.module';

import { AutoridadPage } from './autoridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoridadPageRoutingModule
  ],
  declarations: [AutoridadPage]
})
export class AutoridadPageModule {}
