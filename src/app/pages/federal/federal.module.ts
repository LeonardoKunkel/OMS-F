import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FederalPageRoutingModule } from './federal-routing.module';

import { FederalPage } from './federal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FederalPageRoutingModule
  ],
  declarations: [FederalPage]
})
export class FederalPageModule {}
