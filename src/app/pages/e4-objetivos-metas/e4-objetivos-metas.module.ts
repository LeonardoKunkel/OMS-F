import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E4ObjetivosMetasPageRoutingModule } from './e4-objetivos-metas-routing.module';

import { E4ObjetivosMetasPage } from './e4-objetivos-metas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E4ObjetivosMetasPageRoutingModule
  ],
  declarations: [E4ObjetivosMetasPage]
})
export class E4ObjetivosMetasPageModule {}
