import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e7registro-control-quejas',
  templateUrl: './e7registro-control-quejas.page.html',
  styleUrls: ['./e7registro-control-quejas.page.scss'],
})
export class E7registroControlQuejasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Table([
        [
          new Cell(new Txt(`No.`).alignment('center').fontSize(8).end).rowSpan(2).fillColor('#b2b0b0').end,
          new Cell(new Txt(`Asunto`).alignment('center').fontSize(8).end).colSpan(3).fillColor('#b2b0b0').end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(`Descripción`).alignment('center').fontSize(8).end).rowSpan(2).fillColor('#b2b0b0').end,
          new Cell(new Txt(`Contacto`).alignment('center').fontSize(8).end).rowSpan(2).fillColor('#b2b0b0').end,
          new Cell(new Txt(`Prioridad`).alignment('center').fontSize(8).end).colSpan(3).fillColor('#b2b0b0').end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(`Fecha`).alignment('center').fontSize(8).end).colSpan(2).fillColor('#b2b0b0').end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(`Evidencia`).alignment('center').fontSize(8).end).rowSpan(2).fillColor('#b2b0b0').end,
        ],
        [
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(`Q`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`S`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`O`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(``).fontSize(8).end).end,
          new Cell(new Txt(`A`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`M`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`B`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`INICIO`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(`CIERRE`).fontSize(8).alignment('center').end).fillColor('#b2b0b0').end,
          new Cell(new Txt(``).fontSize(8).end).end,
        ]
      ]).widths([15, 10, 10, 10, 150, 150, 10, 10, 10, 60, 60, 150]).end
    )

    pdf.pageOrientation('landscape')
    pdf.create().open();
    
  }

}
