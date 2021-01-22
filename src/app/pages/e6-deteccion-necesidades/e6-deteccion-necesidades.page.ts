import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-e6-deteccion-necesidades',
  templateUrl: './e6-deteccion-necesidades.page.html',
  styleUrls: ['./e6-deteccion-necesidades.page.scss'],
})
export class E6DeteccionNecesidadesPage implements OnInit {

  constructor(
    private alertController:AlertController
  ) { }

  slides:any=[
    {
      desarrolloLaboral:'Nuevo Ingreso',
      situacionActual:'El personal necesita reforzar el aprendizaje de la metodologia a seguir en caso de necesitarse primeros auxilios de primer contacto.',
      situacionDeseada:[
        {
          a:'Conocer cómo comportarse ante una persona lesionada que requiera primeros auxilios.',
          b:'Entender que solamente realizarán maniobras estabilizadoras de primer contacto.'
        }
      ],
      objetivosNEcesidad:[
        {
          a:'Salvar la vida de las personas en peligro',
          b:'Mayor conciencia de seguridad',
          c:'Evitar complicaciones graves del lesionado'
        }
      ],
      temasCapacitacion:[
        {
          a:'Primeros auxilios de primer contacto',
          b:'Técnicas y manejo inmediatos al lesionado',
          c:'Translado a un puesto de socorro'
        }
      ]
    },
    {
      desarrolloLaboral:'Reentrenamiento',
      situacionActual:'El personal desconoce los procedimientos a seguir en caso de presentarse un incendio menor dentro de las instalaciones.',
      situacionDeseada:[
        {
          a:'Es necesario que la plantilla laboral se actualice en el conocimiento de el uso adecuado de extintores portatiles y las diversas conductas adecuadas para enfrentar una situacion de contacto de incendio.',
        }
      ],
      objetivosNEcesidad:[
        {
          a:'Salvar la vida de las personas en peligro',
          b:'Mayor conciencia de seguridad',
          c:'Resguardar la integridad de las instalaciones'
        }
      ],
      temasCapacitacion:[
        {
          a:'Quimica y comportamiento del fuego',
          b:'Prevención contra incendios',
          c:'Plan de accion para caso de incendios',
          d:'Extintores portátiles'
        }
      ]
    }
  ]

  ngOnInit() {
    
  }

  async pdf(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'nuevoIngreso',
          type: 'radio',
          label: 'Nuevo Ingreso',
          value: 'nuevoIngreso',
          checked: true
        },
        {
          name: 'reentrenamiento',
          type: 'radio',
          label: 'Reentrenamiento',
          value: 'reentrenamiento'
        },
        {
          name: 'cursoExtra',
          type: 'radio',
          label: 'Curso Extra',
          value: 'cursoExtra'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (e) => {
            if (e === 'nuevoIngreso') {
              this.print(this.slides[0])
            }else if (e === 'reentrenamiento') {
              this.print(this.slides[1])
            }
          }
        }
      ]
    });

    await alert.present();
  }

  print(param){
    console.log(param);
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    var dd = {
      userPassword: '123',
      ownerPassword: '123456',
      permissions: {
        printing: 'highResolution', //'lowResolution'
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
      content: [
          {
            table:{
                widths:[560],
                body:[
                    [{text:`1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:8}]
                    ]
            }  
          },{text:'\n'},
          {
            table:{
                widths:[130,10,190,10,170,10],
                body:[
                    [
                        {text:`DESARROLLO LABORAL `,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`DESARROLLO ORGANIZACIONAL`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`SOLUCIÓN DE PROBLEMA`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'}
                    ],[
                        {text:`Nuevo Ingreso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:` Cambio de Tecnología/proceso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Queja de clientes`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Promoción`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de personal `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No conformidad de Auditoría`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Ascenso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Actualización de procedimientos`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Bajo desempeño`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Reentrenamiento`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de Normatividad `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Recomendación de ICR`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Actualización trianual`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Refuerzo de la política`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No se cumplen los objetivos`,fontSize:6},
                        {text:``,fontSize:6}
                    ]
                ]
            }  
          },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN ACTUAL`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:``,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN DESEADA`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:``,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`OBJETIVOS DE LA NECESIDAD`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`TEMAS PARA CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },{
          text:`\n`  
        }
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22, 130]
      
    };
    pdfMake.createPdf(dd).open();
  }
    


}
