import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import { Geolocation } from '@capacitor/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NgCalendarModule } from 'ionic2-calendar';
//import { PdfFonts } from 'pdfmake/build/vfs_fonts.js';

//  import {PdfFonts} from "pdfmake/build/vfs_fonts.js";
//  PdfMakeWrapper.setFonts(PdfFonts);

// const pdfFonts = require('pdfmake/build/vfs_fonts.js');
// PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
