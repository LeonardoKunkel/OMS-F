import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Cell, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-deteccion-necesidades',
  templateUrl: './e6-deteccion-necesidades.page.html',
  styleUrls: ['./e6-deteccion-necesidades.page.scss'],
})

export class E6DeteccionNecesidadesPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  public swipeNext(){
    this.slides.slideNext();
  }
  
  public swipeBack(){
    this.slides.slidePrev();
  }

  dataStatic:any=[
    {
      name:"Desarrollo Laboral",
      developer:[
        'Personal de nuevo ingreso',
        'Promoción del personal',
        'Actualización de conocimientos trianual ',
        'Capacitación de brigadas para respuesta a emergencia'
      ]
    },
    {
      name:"Desarrollo Organizacional",
      developer:[
        'Cambios de tecnología o proceso programado',
        'Cambio de Normatividad',
        'Cambios de personal por cobertura temporal o definitiva',
        'Actualización de procedimientos',
        'Adquisición de equipo nuevo', 
        'Reforzamiento de la política del SASISOPA'
      ]
    },
    {
      name:"Solucion de Problematicas",
      developer:[
        'Quejas o sugerencias de clientes en materia de Sistema de Administración', 
        'Resultado de desempeño en materia de SISOPA',
        'Atención de recomendaciones de una investigación de incidente o accidente',
        'Resultado de Auditoría del SASISOPA', 
        'Logro de objetivos y metas en materia de SASISOPA'
      ]
    }
  ]

  dataDB:any={
    select:'',
    currentSituation:'',
    desiredSituation:'',
    objetives:[],
    topicsTraining:[]
  }

  constructor(
    private alertController:AlertController
  ) { }

  ngOnInit() {
    this.add();
    this.addTraining();
  }

  add(){
    this.dataDB.objetives.push({"value":""});
  }

  addTraining(){
    this.dataDB.topicsTraining.push({"value":""});
  }

  watch(){
    console.log('Data', this.dataDB);
    
  }

  _dynamicPdf(){
    let objetives = this.dataDB.objetives.map(stack =>[
      stack.value
    ]);

    let topicsTraining = this.dataDB.topicsTraining.map(stack =>[
      stack.value
    ]);

    return{objetives, topicsTraining};
  }


  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add([
      [
        new Table(
          [
            [
              new Cell( 
                new Txt('1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN').end).
                fillColor('#665c5c').end
            ]
          ]
        ).widths([500]).end
      ], 
      [
        pdf.ln(2),
        new Table([
          [
            new Cell(new Txt('DESARROLLO LABORAL').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('DESARROLLO ORGANIZACIONAL').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('SOLUCIÓN DE PROBLEMA').end).end,
            new Cell(new Txt('').end).end,
          ],
          [
            new Cell(new Txt('Nuevo Ingreso').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Cambio de Tecnología/proceso').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Queja de clientes').end).end,
            new Cell(new Txt('').end).end,
          ],
          [
            new Cell(new Txt('Promoción').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Cambio de personal').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('No conformidad de Auditoría').end).end,
            new Cell(new Txt('').end).end,
          ],
          [
            new Cell(new Txt('Ascenso').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Actualización de procedimientos').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Bajo desempeño').end).end,
            new Cell(new Txt('').end).end,
          ],
          [
            new Cell(new Txt('Reentrenamiento').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Cambio de Normatividad').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Recomendación de ICR').end).end,
            new Cell(new Txt('').end).end,
          ],
          [
            new Cell(new Txt('Actualización trianual').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Refuerzo de la política').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('No se cumplen los objetivos').end).end,
            new Cell(new Txt('').end).end,
          ]
        ]).end
      ],
      [
        pdf.ln(2),
        new Table([
          [
            new Cell(new Txt('SITUACIÓN ACTUAL').end).end
          ],
          [
            new Cell(new Txt(`${this.dataDB.currentSituation}`).end).end
          ]
        ]).end
      ],
      [
        pdf.ln(2),
        new Table([
          [
            new Cell(new Txt('SITUACIÓN DESEADA').end).end
          ],
          [
            new Cell(new Txt(`${this.dataDB.desiredSituation}`).end).end
          ]
        ]).end
      ],
      [
        pdf.ln(2),
        new Table([
          ['OBJETIVOS DE LA NECESIDAD']
        ]).end,
        new Table(
          this._dynamicPdf().objetives
        ).end
      ],
      [
        pdf.ln(2),
        new Table([
          ['TEMAS PARA CAPACITACIÓN']
        ]).end,
        new Table(
          this._dynamicPdf().topicsTraining
        ).end
      ]
    ]);

    pdf.create().open();
  }
}
