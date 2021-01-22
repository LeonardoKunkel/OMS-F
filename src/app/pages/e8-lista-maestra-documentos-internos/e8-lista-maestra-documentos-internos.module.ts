import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E8ListaMaestraDocumentosInternosPageRoutingModule } from './e8-lista-maestra-documentos-internos-routing.module';

import { E8ListaMaestraDocumentosInternosPage } from './e8-lista-maestra-documentos-internos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E8ListaMaestraDocumentosInternosPageRoutingModule
  ],
  declarations: [E8ListaMaestraDocumentosInternosPage]
})
export class E8ListaMaestraDocumentosInternosPageModule {}
