import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AutoridadPage } from '../pages/autoridad/autoridad.page';
import { GerentePage  } from '../pages/gerente/gerente.page';
import { RepresentantePage } from '../pages/representante/representante.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
 // entryComponents:[AutoridadPage, GerentePage, RepresentantePage]
})
export class Tab1PageModule {}
