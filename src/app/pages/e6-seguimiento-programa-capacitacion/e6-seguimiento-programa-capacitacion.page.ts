import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt }  from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-seguimiento-programa-capacitacion',
  templateUrl: './e6-seguimiento-programa-capacitacion.page.html',
  styleUrls: ['./e6-seguimiento-programa-capacitacion.page.scss'],
})
export class E6SeguimientoProgramaCapacitacionPage implements OnInit {

  constructor() { }

  public anArray:any=[];
  data = false;
  datos:any={
    empresaFerroviaria: "",
    capacidad:[],
    nEconomico:[],
    pesoTara: []
  }

  ngOnInit() {
    this.Add();
  }

  Add(){
    this.anArray.push({'value':''});
  }

  goTo(){
    console.log(this.anArray);
    
  }

  pdf(){
    const pdf = new PdfMakeWrapper();
    pdf.add(new Table([
      [
          new Cell(new Txt(`FECHA`).bold().fontSize(5).alignment('center').end).fillColor('#add9ea').end,
          new Cell(new Txt(`PUESTO`).bold().fontSize(5).end).fillColor('#add9ea').end,
          new Cell(new Txt(`PERSONAL`).bold().fontSize(5).end).fillColor('#add9ea').end,
          new Cell(new Txt(`NOMBRE DEL CURSO`).bold().fontSize(5).alignment('center').end).fillColor('#bce5cc').end,
          new Cell(new Txt(`EVALUACIÓN`).bold().fontSize(5).end).fillColor('#add9ea').end,
          new Cell(new Txt(`SEGUIMIENTO DE APLICACIÓN`).bold().fontSize(5).end).fillColor('#add9ea').end
      ]
    ]).widths([60,150,150,140,90,150]).margin([0,10,0,0]).end)

    for (let i = 0; i < this.anArray.length; i++) {
      pdf.add(new Table([
        [
            new Cell(new Txt(`${this.anArray[i].fecha}`).fontSize(5).end).end,
            new Cell(new Txt(`${this.anArray[i].puesto}`).fontSize(5).end).end,
            new Cell(new Txt(`${this.anArray[i].personal}`).fontSize(5).end).end,
            new Cell(new Txt(`${this.anArray[i].nombreCurso}`).fontSize(5).end).end,
            new Cell(new Txt(`${this.anArray[i].evaluacion}`).fontSize(5).end).end,
            new Cell(new Txt(`${this.anArray[i].seguimientoAplicacion}`).fontSize(5).end).end
        ]
      ]).widths([60,150,150,140,90,150]).end)
    }

    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open(); 
  }


}
