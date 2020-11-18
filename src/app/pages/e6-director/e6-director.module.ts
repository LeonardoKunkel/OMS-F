import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E6DirectorPageRoutingModule } from './e6-director-routing.module';

import { E6DirectorPage } from './e6-director.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E6DirectorPageRoutingModule
  ],
  declarations: [E6DirectorPage]
})
export class E6DirectorPageModule {}
