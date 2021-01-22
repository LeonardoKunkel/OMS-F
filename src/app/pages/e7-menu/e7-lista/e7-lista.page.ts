import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Cell, Columns, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { E7ListaService } from 'src/app/services/e7-lista.service';

@Component({
  selector: 'app-e7-lista',
  templateUrl: './e7-lista.page.html',
  styleUrls: ['./e7-lista.page.scss'],
})
export class E7ListaPage implements OnInit {
  public anArray:any=[];
  datos:any={
    tipo:'',
    categoria:'',
    nombreCurso:'',
    lugar:'',
    facilitador:'',
    empresa:'',
    registros:this.anArray
  }
  constructor(
    public toast: ToastController,
    private listaService: E7ListaService
  ) {
    // this.getLista();
    }

  ngOnInit() {
    this.add();
  }

  add(){
    this.anArray.push({'value':''});
  }

  change($event){
    this.datos.tipo = $event.detail.value;
  }
  changeCat($event){
    this.datos.categoria = $event.detail.value;
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Table([
          [new Cell(new Txt(`Tipo: ${this.datos.tipo}`).fontSize(8).end).end],
          [new Cell(new Txt(`Categoria: ${this.datos.categoria}`).fontSize(8).end).end],
          [new Cell(new Txt(`Nombre del curso o documento: ${this.datos.nombreCurso}`).fontSize(8).end).end],
          [new Cell(new Txt(`Lugar: ${this.datos.lugar}`).fontSize(8).end).end],
          [new Cell(new Txt(`Facilitador: ${this.datos.facilitador}`).fontSize(8).end).end],
          [new Cell(new Txt(`Empresa: ${this.datos.empresa}`).fontSize(8).end).end]
      ]).widths([500]).end
    );

    pdf.add(
      pdf.ln(2)
    );

    pdf.add(
        new Table([
          [
            new Cell(new Txt(`No.`).alignment('center').fontSize(8).end).fillColor('#b2b0b0').end,
            new Cell(new Txt(`Nombre`).alignment('center').fontSize(8).end).fillColor('#b2b0b0').end,
            new Cell(new Txt(`Cargo`).alignment('center').fontSize(8).end).fillColor('#b2b0b0').end,
            new Cell(new Txt(`Firma`).alignment('center').fontSize(8).end).fillColor('#b2b0b0').end,
          ]
        ]).widths([20,220,150,85]).end
    )

    
      for (let i = 0; i < this.anArray.length; i++) {
        pdf.add(
          new Table([
            [
              new Cell(new Txt(`${i + 1}`).alignment('center').fontSize(8).end).end,
              new Cell(new Txt(`${this.anArray[i].nombre}`).alignment('center').fontSize(8).end).end,
              new Cell(new Txt(`${this.anArray[i].cargo}`).alignment('center').fontSize(8).end).end,
              new Cell(new Txt(``).alignment('center').fontSize(8).end).end,
            ]
          ]).widths([20,220,150,85]).end
        );
      }


    pdf.pageOrientation('portrait')
    pdf.create().open();
  }
  
  form(){
    console.log(this.datos);
    
  }

}
