import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { E7registroControlQuejasPage } from './e7registro-control-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: E7registroControlQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class E7registroControlQuejasPageRoutingModule {}
