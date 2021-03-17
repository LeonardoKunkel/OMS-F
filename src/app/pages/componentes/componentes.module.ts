import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesPageRoutingModule } from './componentes-routing.module';

import { ComponentesPage } from './componentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesPageRoutingModule
  ],
  declarations: [ComponentesPage]
})
export class ComponentesPageModule {}
