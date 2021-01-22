import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonFederalComponent } from './acordeon-federal/acordeon-federal.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AcordeonFederalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AcordeonFederalComponent
  ]
})
export class ComponentsModule { }
