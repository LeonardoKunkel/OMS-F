import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Table, Cell, Img } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e18-procedimiento',
  templateUrl: './e18-procedimiento.page.html',
  styleUrls: ['./e18-procedimiento.page.scss'],
})
export class E18ProcedimientoPage implements OnInit {

nombreGas="eduardo"
  constructor() { }

  ngOnInit() {
  }
  
  async generatePdf(){
    const pdf = new PdfMakeWrapper();
    pdf.pageSize('letter');
    //HEADER
    pdf.header(
      new Table ([
        [  
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).rowSpan(2).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end, 
        ],
        [  
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end,
          new Cell( new Txt('Column 2 with colspan').bold().fontSize(5).end ).end, 
        ]
      ]).widths([350, 110, 80]).alignment('center').margin([20, 8]).end
    );
    // background
    pdf.background(
        await new Img('../../../assets/icon/vms-transparencia.png').
        height(320).
        width(300).
        opacity(0.3).
        margin([150,200]).
        build()
    );
    //Contenido
    pdf.add(
      new Txt('SASISOPA').margin(120).fontSize(30).end
    );
    //FOOTER
    pdf.footer(
      await new Img('../../../assets/images/copyright_footer-07.png').
      height(100).
      width(560).
      margin([15, -70]).
      build() 
    );
    pdf.create().open();
  }

}
