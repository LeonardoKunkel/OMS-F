import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TictactoePageRoutingModule } from './tictactoe-routing.module';

import { TictactoePage } from './tictactoe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TictactoePageRoutingModule
  ],
  declarations: [TictactoePage]
})
export class TictactoePageModule {}
