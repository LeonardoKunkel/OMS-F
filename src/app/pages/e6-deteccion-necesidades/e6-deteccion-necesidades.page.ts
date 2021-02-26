import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

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
  public anArray:any=[];
  public anCapacitation:any=[];
  public form = [
    {
      name:"Desarrollo Laboral",
      developer:[
        { val: 'Personal de nuevo ingreso', isChecked: false },
        { val: 'Promoción del personal', isChecked: false },
        { val: 'Actualización de conocimientos trianual ', isChecked: false },
        { val: 'Capacitación de brigadas para respuesta a emergencia', isChecked: false }
      ],
      prueba:[

      ]
    },
    {
      name:"Desarrollo Organizacional",
      developer:[
        { val: 'Cambios de tecnología o proceso programado', isChecked: false },
        { val: 'Cambio de Normatividad', isChecked: false },
        { val: 'Cambios de personal por cobertura temporal o definitiva', isChecked: false },
        { val: 'Actualización de procedimientos', isChecked: false },
        { val: 'Adquisición de equipo nuevo', isChecked: false },
        { val: 'Reforzamiento de la política del SASISOPA', isChecked: false }
      ]
    },
    {
      name:"Solucion de Problematicas",
      developer:[
        { val: 'Quejas o sugerencias de clientes en materia de Sistema de Administración', isChecked: false },
        { val: 'Resultado de desempeño en materia de SISOPA', isChecked: false },
        { val: 'Atención de recomendaciones de una investigación de incidente o accidente', isChecked: false },
        { val: 'Resultado de Auditoría del SASISOPA', isChecked: false },
        { val: 'Logro de objetivos y metas en materia de SASISOPA', isChecked: false },
      ],
      prueba:[

      ]
    }
  ];

  _dataBase:any={
    ObjetiveNeed:[
      
    ],
    TopicsTraining:[
      
    ]

  }

  constructor(
    private alertController:AlertController
  ) { }

  ngOnInit() {
    
    this.addCapacitation();
  }


  add(event){

    if (event === this.form[0].name) {
      // this.form[0].prueba.push({"value":""});
       this.anArray.push({"value":""});
    }
    if (event === this.form[1].name) {
      console.log("evento dos");
    }
    if (event === this.form[2].name) {
      console.log("evento tres");
    }  

    // this.anArray.push({"value":""});
    // this.form[0].prueba.push({"value":""});
    
    
  }

  addCapacitation(){
    this.anCapacitation.push({"value":""});
  }

  watch(){
    console.log(this._dataBase);
    
  }


  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add([
      [
        new Cell( new Txt('1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN').end).color('#ddddd').end
      ], 
      [
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
        new Table([
          [
            new Cell(new Txt('SITUACIÓN ACTUAL').end).end
          ],
          [
            new Cell(new Txt('').end).end
          ]
        ]).end
      ]
    ]);

    pdf.create().open();
  }

  // async pdf(){
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Radio',
  //     inputs: [
  //       {
  //         name: 'nuevoIngreso',
  //         type: 'radio',
  //         label: 'Nuevo Ingreso',
  //         value: 'nuevoIngreso',
  //         checked: true
  //       },
  //       {
  //         name: 'reentrenamiento',
  //         type: 'radio',
  //         label: 'Reentrenamiento',
  //         value: 'reentrenamiento'
  //       },
  //       {
  //         name: 'cursoExtra',
  //         type: 'radio',
  //         label: 'Curso Extra',
  //         value: 'cursoExtra'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (e) => {
  //           if (e === 'nuevoIngreso') {
  //             this.print(this.slides[0])
  //           }else if (e === 'reentrenamiento') {
  //             this.print(this.slides[1])
  //           }
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // // }

  // print(param){
  //   console.log(param);
  //   var fecha = new Date();
  //   let day = fecha.getDate();
  //   let month = fecha.getUTCMonth() + 1;
  //   let year = fecha.getFullYear();
  //   var dd = {
  //     userPassword: '123',
  //     ownerPassword: '123456',
  //     permissions: {
  //       printing: 'highResolution', //'lowResolution'
  //       modifying: false,
  //       copying: false,
  //       annotating: true,
  //       fillingForms: true,
  //       contentAccessibility: true,
  //       documentAssembly: true
  //     },
  //     content: [
  //         {
  //           table:{
  //               widths:[560],
  //               body:[
  //                   [{text:`1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:8}]
  //                   ]
  //           }  
  //         },{text:'\n'},
  //         {
  //           table:{
  //               widths:[130,10,190,10,170,10],
  //               body:[
  //                   [
  //                       {text:`DESARROLLO LABORAL `,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
  //                       {text:``,bold:true,fillColor:'#a5c3dd'},
  //                       {text:`DESARROLLO ORGANIZACIONAL`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
  //                       {text:``,bold:true,fillColor:'#a5c3dd'},
  //                       {text:`SOLUCIÓN DE PROBLEMA`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
  //                       {text:``,bold:true,fillColor:'#a5c3dd'}
  //                   ],[
  //                       {text:`Nuevo Ingreso`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:` Cambio de Tecnología/proceso`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Queja de clientes`,fontSize:6},
  //                       {text:``,fontSize:6}
  //                   ],[
  //                       {text:`Promoción`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Cambio de personal `,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`No conformidad de Auditoría`,fontSize:6},
  //                       {text:``,fontSize:6}
  //                   ],[
  //                       {text:`Ascenso`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Actualización de procedimientos`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Bajo desempeño`,fontSize:6},
  //                       {text:``,fontSize:6}
  //                   ],[
  //                       {text:`Reentrenamiento`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Cambio de Normatividad `,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Recomendación de ICR`,fontSize:6},
  //                       {text:``,fontSize:6}
  //                   ],[
  //                       {text:`Actualización trianual`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`Refuerzo de la política`,fontSize:6},
  //                       {text:``,fontSize:6},
  //                       {text:`No se cumplen los objetivos`,fontSize:6},
  //                       {text:``,fontSize:6}
  //                   ]
  //               ]
  //           }  
  //         },
  //       {
  //         text:'\n'
  //       },{
  //           table:{
  //               widths:[560],
  //                 heights: [6,6,6,6],
  //               body:[
  //                   [{text:`SITUACIÓN ACTUAL`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
  //                   [{text:``,fontSize:6,alignment:'justify'},],
  //                   [{text:``,fontSize:6},],
  //                   [{text:``,fontSize:6},]
                    
  //                   ]
  //           }
  //       },
  //       {
  //         text:'\n'
  //       },{
  //           table:{
  //               widths:[560],
  //                 heights: [6,6,6,6],
  //               body:[
  //                   [{text:`SITUACIÓN DESEADA`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
  //                   [{text:``,fontSize:6,alignment:'justify'},],
  //                   [{text:``,fontSize:6},],
  //                   [{text:``,fontSize:6},]
                    
  //                   ]
  //           }
  //       },
  //       {
  //         text:'\n'
  //       },{
  //           table:{
  //               widths:[15,545],
  //                 heights: [6,6,6,6],
  //               body:[
  //                   [{text:`OBJETIVOS DE LA NECESIDAD`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
  //                   [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
  //                   [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
  //                   [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
  //                   [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
  //                   ]
  //           }
  //       },
  //       {
  //         text:'\n'
  //       },{
  //           table:{
  //               widths:[15,545],
  //                 heights: [6,6,6,6],
  //               body:[
  //                   [{text:`TEMAS PARA CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
  //                   [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
  //                   [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
  //                   [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
  //                   [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
  //                   ]
  //           }
  //       },{
  //         text:`\n`  
  //       }
  //         ]
  //    ,
  //     pageSize: 'LETTER',
  //     pageMargins: [22, 130]
      
  //   };
  //   pdfMake.createPdf(dd).open();
  // }
    


}
