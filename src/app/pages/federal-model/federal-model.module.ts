import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FederalModelPageRoutingModule } from './federal-model-routing.module';

import { FederalModelPage } from './federal-model.page';
import { ComponentsModule } from 'src/app/components/components.module';

// import { AcordeonFederalComponent } from '../../components/acordeon-federal/acordeon-federal.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    FederalModelPageRoutingModule
  ],
  declarations: [FederalModelPage]
})
export class FederalModelPageModule {}
