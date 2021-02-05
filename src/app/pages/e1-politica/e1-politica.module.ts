import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E1PoliticaPageRoutingModule } from './e1-politica-routing.module';

import { E1PoliticaPage } from './e1-politica.page';
// import { PdfMakeWrapper } from 'pdfmake-wrapper';
// const pdfFonts = require ('../../../assets/fonts/custom-fonts.js');
// import  pdfFonts  from '../../../assets/fonts/custom-fonts'
// // import {pdfFonts} from '../assets/custom-fonts.js'

// PdfMakeWrapper.setFonts(pdfFonts, {
//   sonySketch:{
//     normal: 'Sony_Sketch_EF.ttf',
//     bold: 'Sony_Sketch_EF.ttf',
//     italics: 'Sony_Sketch_EF.ttf',
//     bolditalics: 'Sony_Sketch_EF.ttf'
//   }

// });

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E1PoliticaPageRoutingModule
  ],
  declarations: [E1PoliticaPage]
})
export class E1PoliticaPageModule {}
