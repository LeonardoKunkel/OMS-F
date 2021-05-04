import { FormsModule } from '@angular/forms';
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
import { SwiperModule } from 'swiper/angular';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

// import pdfFonts from '../assets/fonts/custom-fonts.js';
import pdfFonts from 'pdfmake/build/vfs_fonts';
// configuring fonts
PdfMakeWrapper.setFonts(pdfFonts);

// // import pdfFonts from '../assets/fonts/Sony_Sketch_EF.ttf';

//Configuring custom fonts
// PdfMakeWrapper.setFonts(pdfFonts, {
//   Sony: {
//       normal: 'Birthday.ttf',
//       bold: 'Birthday.ttf',
//       italics: 'Birthday.ttf',
//       bolditalics: 'Birthday.ttf'
//   }
// });

// PdfMakeWrapper.useFont('Sony');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgCalendarModule,
    SwiperModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileOpener,
    DocumentViewer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
