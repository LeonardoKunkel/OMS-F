import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class PdfMakerService {

  pdfObj = null;

  constructor() { }

  generate(document, title) {
    this.pdfObj = pdfMake.createPdf(document);
      // Descargar el pdf
    // this.pdfObj.download(title);
      // Ver en la misma ventana
    // this.pdfObj.open({}, window);
      // Abrir en otra ventana
    this.pdfObj.open({title});
      // Imprimir el pdf
    // this.pdfObj.print();
  }
}
