import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E8ListaMaestraDocumentosInternosPage } from './e8-lista-maestra-documentos-internos.page';

const routes: Routes = [
  {
    path: '',
    component: E8ListaMaestraDocumentosInternosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E8ListaMaestraDocumentosInternosPageRoutingModule {}
