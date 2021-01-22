import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioCrePageRoutingModule } from './calendario-cre-routing.module';

import { CalendarioCrePage } from './calendario-cre.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-MX';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioCrePageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarioCrePage],
  // providers: [
  //   { provide: LOCALE_ID, useValue: 'es-MX' }
  // ]
})
export class CalendarioCrePageModule {}
