import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TictactoePage } from './tictactoe.page';

const routes: Routes = [
  {
    path: '',
    component: TictactoePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TictactoePageRoutingModule {}
