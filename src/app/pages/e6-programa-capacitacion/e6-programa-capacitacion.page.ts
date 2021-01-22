import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-programa-capacitacion',
  templateUrl: './e6-programa-capacitacion.page.html',
  styleUrls: ['./e6-programa-capacitacion.page.scss'],
})
export class E6ProgramaCapacitacionPage implements OnInit {

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
          new Cell(new Txt(`NO.`).bold().fontSize(8).alignment('center').end).fillColor('#add9ea').end,
          new Cell(new Txt(`NOMBRE DEL CURSO`).bold().fontSize(8).end).fillColor('#add9ea').end,
          new Cell(new Txt(`OBJETIVO`).bold().fontSize(8).end).fillColor('#add9ea').end,
          new Cell(new Txt(`CONTENIDO`).bold().fontSize(8).alignment('center').end).fillColor('#bce5cc').end,
          new Cell(new Txt(`DURACIÓN (horas)`).bold().fontSize(8).end).fillColor('#add9ea').end,
          new Cell(new Txt(`MODALIDAD (Interna/Externa)`).bold().fontSize(8).end).fillColor('#add9ea').end,
          new Cell(new Txt(`METODOLOGÍA (Curso, taller, etc.)`).bold().fontSize(8).end).fillColor('#add9ea').end,
          new Cell(new Txt(`COSTO (pesos)`).bold().fontSize(8).end).fillColor('#add9ea').end
      ]
    ]).widths([15,130,130,130,75,75,75,75]).margin([0,10,0,0]).end)

    for (let i = 0; i < this.anArray.length; i++) {
      pdf.add(new Table([
        [
            new Cell(new Txt(`${i + 1}`).bold().fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].nombreCurso}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].objetivo}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].contenido}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].duracion}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].modalidad}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].metodologia}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.anArray[i].costo}`).fontSize(8).end).end,
        ]
      ]).widths([15,130,130,130,75,75,75,75]).end)
      
    }

    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open(); 
    
  }

}
