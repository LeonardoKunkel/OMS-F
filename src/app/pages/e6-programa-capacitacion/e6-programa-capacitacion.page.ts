import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-programa-capacitacion',
  templateUrl: './e6-programa-capacitacion.page.html',
  styleUrls: ['./e6-programa-capacitacion.page.scss'],
})


export class E6ProgramaCapacitacionPage implements OnInit {

  @ViewChild('color') color: ElementRef;

  constructor() { }

  public trainingLetter:any=[];


  public anArray:any=[];
  public cardArray:any=[];
  public addPersonales:any=[];

  ngOnInit() {
    // this.Add();
    // this.addCard();
    this.addLetter();
    
  }

  addLetter(){
    this.trainingLetter.push({
      'nombreCurso':'',
      'nombreInstructor':'',
      'fecha':'',
      'costo':'',
      'duracion':'',
      'objetivo':'',
      'contenido':'',
      'metodologia':'',
      'modalidad':'',
      personal:new Array
    })
  }

  addPersonal(e){
    // el evento te trae en numero de carta
    let arrayNumber = e;
    this.trainingLetter[arrayNumber].personal.push(
      {
        "puesto":" ",
        "personal":" "
      }
    );
  }

  send(){
     console.log(this.trainingLetter); ////Meter los datos de Anarray card a arraycard
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

      for (let i = 0; i < this.trainingLetter.length; i++) {
        pdf.add([
          new Table([
            [
              new Cell ( new Txt(`${i + 1}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].nombreCurso}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].objetivo}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].contenido}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].duracion}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].modalidad}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].metodologia}`).fontSize(8).alignment('center').end).end,
              new Cell ( new Txt(`${this.trainingLetter[i].costo}`).fontSize(8).alignment('center').end).end
            ]
          ]).widths([15,130,130,130,75,75,75,75]).end
        ])
      }

    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open();
  }

  // pdf(){
  //   const pdf = new PdfMakeWrapper();
  //   pdf.add(new Table([
  //     [
  //         new Cell(new Txt(`NO.`).bold().fontSize(8).alignment('center').end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`NOMBRE DEL CURSO`).bold().fontSize(8).end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`OBJETIVO`).bold().fontSize(8).end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`CONTENIDO`).bold().fontSize(8).alignment('center').end).fillColor('#bce5cc').end,
  //         new Cell(new Txt(`DURACIÓN (horas)`).bold().fontSize(8).end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`MODALIDAD (Interna/Externa)`).bold().fontSize(8).end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`METODOLOGÍA (Curso, taller, etc.)`).bold().fontSize(8).end).fillColor('#add9ea').end,
  //         new Cell(new Txt(`COSTO (pesos)`).bold().fontSize(8).end).fillColor('#add9ea').end
  //     ]
  //   ]).widths([15,130,130,130,75,75,75,75]).margin([0,10,0,0]).end)

  //   for (let i = 0; i < this.anArray.length; i++) {
  //     pdf.add(new Table([
  //       [
  //           new Cell(new Txt(`${i + 1}`).bold().fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].nombreCurso}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].objetivo}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].contenido}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].duracion}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].modalidad}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].metodologia}`).fontSize(8).end).end,
  //           new Cell(new Txt(`${this.anArray[i].costo}`).fontSize(8).end).end,
  //       ]
  //     ]).widths([15,130,130,130,75,75,75,75]).end)
      
  //   }

  //   //CRONOGRAMA


  //   pdf.add(
  //     new Table([
  //       [
  //         new Cell(new Txt('Nombre del curso').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Instructor').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Ene').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Feb').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Mar').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Abr').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('May').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Jun').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Jul').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Ago').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Sep').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Oct').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Nov').fontSize(8).alignment('center').end).fillColor('#d79043').end,
  //         new Cell(new Txt('Dic').fontSize(8).alignment('center').end).fillColor('#d79043').end
  //       ]
  //     ]).widths([200, 150, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]).end
  //   )

  //   for (let index = 0; index < this.croArray.length; index++) {
  //     pdf.add(
  //       new Table([
  //         [
  //           new Cell(new Txt(`${this.croArray[index].nombreCurso}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].instructor}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].ene === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].feb === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].mar === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].abr === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].may === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].jun === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].jul === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].ago === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].sep === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].oct === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].nov === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end,
  //           new Cell(new Txt(`${this.croArray[index].dic === undefined ? ' ' : 'X'}`).fontSize(8).alignment('justify').end).end
  //         ]
  //       ]).widths([200, 150, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]).end
  //     )
  //     // `${this.riesgos[i].peligros[1] === undefined  ? ' ': 'b.'+this.riesgos[i].peligros[1]}` 
  //     // this.croArray[index].dic === false ? 'Esfalso' : 'Es verdadero'
  //   }

  //   //Pdf Conf

  //   pdf.pageMargins([20, 30, 30, 20]);
  //   pdf.pageOrientation('landscape');
  //   pdf.create().open(); 
    
  // }

}
