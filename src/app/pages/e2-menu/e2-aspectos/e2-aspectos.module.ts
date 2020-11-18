import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E2AspectosPageRoutingModule } from './e2-aspectos-routing.module';

import { E2AspectosPage } from './e2-aspectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E2AspectosPageRoutingModule
  ],
  declarations: [E2AspectosPage]
})
export class E2AspectosPageModule {}
