import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper'

@Component({
  selector: 'app-e7-quejas-sugerencias',
  templateUrl: './e7-quejas-sugerencias.page.html',
  styleUrls: ['./e7-quejas-sugerencias.page.scss'],
})
export class E7QuejasSugerenciasPage implements OnInit {
  datos:{
  }
  public anArray:any=[];

  constructor() { }

  ngOnInit() {
    this.add();
  }

  add(){
    this.anArray.push({
      descripcion:'',
      tipo:'',
      alteracion:'',
      prioridad:'',
      nombre:'',
      contacto:''
    });
  }

  change($event){
    console.log($event.detail.value);
     this.anArray[this.anArray.length - 1].tipo = $event.detail.value;
  }

  change2($event){
    console.log($event.detail.value);
    this.anArray[this.anArray.length - 1].alteracion = $event.detail.value;
  }

  change3($event){
    console.log($event.detail.value);
    this.anArray[this.anArray.length - 1].prioridad = $event.detail.value;
  }


  enviar(){
    console.log(this.anArray);
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    for (let i = 0; i < this.anArray.length; i++) {

      pdf.add(
        [
          new Table([
            [new Cell(new Txt(`Tipo: ${this.anArray[i].tipo}`).end).end],
            [new Cell(new Txt(`Alteración: ${this.anArray[i].alteracion}`).end).end],
          ]).heights(
            rowIndex =>{
              return rowIndex === i++ ? 10 :0;
            }
          ).widths([500, 500]).end,
          pdf.ln(1)
        ]
      )

      pdf.add(
        new Table([
          [new Cell(new Txt('Descripción o Motivo:').end).end],
          [new Cell(new Txt(`${this.anArray[i].descripcion}`).end).end],
        ]).heights(
          rowIndex =>{
            const a = rowIndex === 0 ? 10 :0 &&  i++ ? 90 :100; //el ultimo es el valor de la altura
             return a ;
          }
        ).widths([500]).end
      )
      pdf.add( pdf.ln(2))
      pdf.add(
        new Table([
          [
            new Cell(new Txt('Nombre').end).end,
            new Cell(new Txt(`${this.anArray[i].nombre}`).end).end,
            new Cell(new Txt('Contacto: correo/celular').end).end,
            new Cell(new Txt(`${this.anArray[i].prioridad}`).end).end,
          ],
        ]).widths([45, 150, 140, 140]).end
      )
      
      pdf.add(pdf.ln(1))

      pdf.add(
        new Table([
          [
            new Cell(new Txt('Control interno').end).fillColor('#bab4b4').end,
            new Cell(new Txt(`Consecutivo No: ${i+1}`).end).fillColor('#bab4b4').end,
            new Cell(new Txt(`Prioridad: ${this.anArray[i].prioridad}`).end).fillColor('#bab4b4').end,
          ]
        ]).widths([80,200,205]).end
      )

      pdf.add(pdf.ln(3))
    }
    pdf.create().open();
    
  }

}
