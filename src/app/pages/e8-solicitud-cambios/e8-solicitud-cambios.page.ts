import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
@Component({
  selector: 'app-e8-solicitud-cambios',
  templateUrl: './e8-solicitud-cambios.page.html',
  styleUrls: ['./e8-solicitud-cambios.page.scss'],
})
export class E8SolicitudCambiosPage implements OnInit {

  datos:any={
    tipoDoc:'',
    origenCambio:'',
    estadoActual:'',
    cambioPropuesto:'',
    motivoAceptacion:''
  }

  tipoDoc:any=[
    'PROCEDIMIENTO DE SISTEMA',
    'PROCEDIMIENTO ESPECÍFICO',
    'FORMATO DE SISTEMA',
    'FORMATO OPERATIVO'
  ]

  origenCambio:any=[
    'SUGERENCIA',
    'RECOMENDACIÓN ICR',
    'CAMBIO DE TECNOLOGÍA',
    'HALLAZGO DE AUDITORÍA',
    'ACCIÓN DE MEJORA',
    'CAMBIO EN EL PROCESO',
  ]

  constructor() { }

  ngOnInit() {
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add([
      [
        new Table([
          [
            new Cell(new Txt('CODIFICACIÓN').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').fontSize(8).end).end,
            new Cell(new Txt('FECHA DE SOLICITUD').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').fontSize(8).end).end,
          ],
          [
            new Cell(new Txt('NOMBRE DEL DOCUMENTO').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').fontSize(8).end).end,
            new Cell(new Txt('ELEMENTO DEL SISTEMA').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').fontSize(8).end).end,
          ],
          [
            new Cell(new Txt('NOMBRE DEL SOLICITANTE').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').end).fontSize(8).end,
            new Cell(new Txt('PUESTO').fontSize(8).end).fillColor('#ababab').end,
            new Cell(new Txt('').fontSize(8).end).end,
          ],
        ]).widths([130, 140, 110, 120]).end,
      ],
      [
        pdf.ln(3),
        new Table(
          [
            [
              new Cell(new Txt('TIPO DE DOCUMENTO').fontSize(8).end).fillColor('#ababab').end,
              new Cell(new Txt('').end).fontSize(8).end,
              new Cell(new Txt('ORIGEN DEL CAMBIO').fontSize(8).end).fillColor('#ababab').end,
              new Cell(new Txt('').fontSize(8).end).end,
              new Cell(new Txt('RESULTADO DE LA EVALUACIÓN').fontSize(8).end).fillColor('#ababab').end,
              new Cell(new Txt('').fontSize(8).end).end
            ]
          ]
        ).widths([60, 100, 60, 100, 60, 100]).end
      ],
      [
        pdf.ln(3),
        new Table([
          [
            new Cell(new Txt('ESTADO ACTUAL').end).fillColor('#ababab').end
          ],
          [
            new Cell(new Txt(`${this.datos.estadoActual}`).end).end
          ],
          [
            new Cell(new Txt('CAMBIO PROPUESTO').end).fillColor('#ababab').end
          ],
          [
            new Cell(new Txt(`${this.datos.cambioPropuesto}`).end).end
          ],
          [
            new Cell(new Txt('MOTIVO DE LA ACEPTACIÓN O RECHAZO').end).fillColor('#ababab').end
          ],
          [
            new Cell(new Txt(`${this.datos.motivoAceptacion}`).end).end
          ],
        ]).widths([530]).
        heights(
          rowIndex =>{
            return rowIndex %2 === 1 ? 40 : 0 ;
          }
        ).end, 
      ]
    ])
    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('portrait');
    pdf.create().open(); 
  }

}
