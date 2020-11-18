import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6DespachadoresPageRoutingModule } from './e6-despachadores-routing.module';

import { E6DespachadoresPage } from './e6-despachadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6DespachadoresPageRoutingModule
  ],
  declarations: [E6DespachadoresPage]
})
export class E6DespachadoresPageModule {}
