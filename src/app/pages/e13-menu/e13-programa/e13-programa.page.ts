import { PdfMakerService } from './../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e13-programa',
  templateUrl: './e13-programa.page.html',
  styleUrls: ['./e13-programa.page.scss'],
})
export class E13ProgramaPage implements OnInit {

  constructor(
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
  }

  pdf1() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background(currentPage, pageSize) {
      //   return {
      //     image: ``, width: 300, height: 420,
      //     absolutePosition: {x: 160, y: 190}, opacity: 0.5
      //   };
      // },
      header() {
        return {
          table: {
            widths: [150, 400],
            heights: [30, 10, 10],
            body: [
              [
                {
                  // image: ``,
                  // width: 45,
                  // height: 60,
                  // alignment: 'left',
                  // border: [true, true, false, true],
                  // margin: [10, 0]
                },
                {
                  text: ``,
                  bold: true,
                  fontSize: 15,
                  alignment: 'center',
                  margin: [0, 15],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                },
                {}
              ],
              [
                {
                  text: 'PLANEACIÓN DE SIMULACROS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#ddd',
                },
              ]
            ]
          },
          margin: [22, 15]
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                //   image: ``,
                //   pageBreak: 'after',
                //   width: 510,
                //   height: 60,
                },
              ],
              [''],
            ]
          },
          layout: 'headerLineOnly',
          margin: [50, 20],
        };
      },
      content: [
        {
          table: {
            widths: [30, 320, 192],
            body: [
              [
                {text: '1.  INFORMACIÓN GENERAL DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3},
                {},
                {}
              ],
              [
                {text: 'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold: true, colSpan: 3},
                {},
                {}
              ],
              [
                {text: 'No.', bold: true, alignment: 'center'},
                {text: '1', bold: true, alignment: 'center'},
                {text: 'RESPONSABLE DE LA ATENCIÓN', bold: true, alignment: 'center', fontSize: 10},
              ],
              [
                {text: '1', alignment: 'center'},
                {text: 'Aprender el procedimiento en caso de un incendio en el área de despacho', bold: true, alignment: 'center'},
                {text: 'Gerente de la Estación de Servicio', fontSize: 10}
              ],
              [
                {text: '2', alignment: 'center'},
                {text: 'Salvaguardar la vida de las personas en la ES', bold: true, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10}
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [281, 271],
            body: [
              [
                {text: 'ÁREA: Despacho', bold: true},
                {text: `FECHA Y HORA PROGRAMADA: `, bold: true}
              ],
              [
                {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true},
                {text: `CON AVISO PREVIO: `, bold: true}
              ],
              [
                {text: `CLASE DE SIMULACRO: `, bold: true},
                {text: 'AGENTE PERTURBADOR: Fuego', bold: true}
              ],
              [
                {
                  colSpan: 2,
                  text: [
                    {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:\n', bold: true},
                    ``
                  ]
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [180, 372],
            body: [
              [
                {text: '2.  EQUIPO DE PROTECCIÓN PERSONALO Y DISPOSITIVOS ', bold: true, fillColor: '#ddd', colSpan: 2},
                {}
              ],
              [
                {text: 'Traje de bomberos', alignment: 'center'},
                {text: 'Extintores PQS 9 kg', alignment: 'center'},
              ],
              [
                {text: 'Guantes', alignment: 'center'},
                {text: 'Válvulas de cierre y corte', alignment: 'center'},
              ],
              [
                {text: 'Ropa 100% algodón', alignment: 'center'},
                {text: 'Paro de emergencias', alignment: 'center'},
              ],
              [
                {text: 'Casco', alignment: 'center'},
                {text: 'Botiquín de emergencia', alignment: 'center'},
              ],
              [
                {text: 'Mascarilla', alignment: 'center'},
                {text: '', alignment: 'center'},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [20, 140, 30, 65, 112, 70, 70],
            body: [
              [
                {text: '3.  SECUENCIA DE ACCIONES DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 7},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: 'ACTIVIDAD', bold: true, fillColor: '#ddd', colSpan: 4},
                {},
                {},
                {},
                {text: 'RESPONSABLE', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
                {text: 'RECURSOS\nMATERIALES\nREQUERIDOS', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2, fontSize: 8},
                {text: 'TIEMPO DE RESPUESTA', bold: true, fillColor: '#ddd', alignment: 'center', rowSpan: 2},
              ],
              [
                {text: 'No.', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'REAL', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'SIMULADA', bold: true, fillColor: '#ddd', alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '1', alignment: 'center'},
                {text: 'Cliente arriba a la ES'},
                {text: 'X', alignment: 'center'},
                {},
                {text: 'N/A', alignment: 'center'},
                {text: 'N/A', alignment: 'center'},
                {text: 'N/A', alignment: 'center'},
              ],
              [
                {text: '2', alignment: 'center'},
                {text: 'Se dispone a ser atentado'},
                {text: 'X', alignment: 'center'},
                {},
                {text: 'N/A', alignment: 'center'},
                {text: 'N/A', alignment: 'center'},
                {text: 'N/A', alignment: 'center'},
              ],
              [
                  {text: '3', alignment: 'center'},
                  {text: 'El despachador surte producto'},
                  {},
                  {text: 'X', alignment: 'center'},
                  {text: 'Despachador', alignment: 'center'},
                  {text: 'Dispensario', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
              ],
              [
                  {text: '4', alignment: 'center'},
                  {text: 'Cliente adquiere energía estática al friccionar su ropa', fontSize: 9},
                  {},
                  {text: 'X', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
              ],
              [
                  {text: '5', alignment: 'center'},
                  {text: 'Chispa genera ignición', fontSize: 9},
                  {},
                  {text: 'X', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
              ],
              [
                  {text: '6', alignment: 'center'},
                  {text: 'La manguera dispensa producto con fuego', fontSize: 9},
                  {},
                  {text: 'X', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
                  {text: 'N/A', alignment: 'center'},
              ],
              [
                  {text: '7', alignment: 'center'},
                  {text: 'Se acciona paro de emergencia'},
                  {text: 'X', alignment: 'center'},
                  {},
                  {text: 'Despachador', alignment: 'center'},
                  {text: 'Paro de emergencia', alignment: 'center'},
                  {text: '10 segundos', alignment: 'center'},
              ],
              [
                  {text: '8', alignment: 'center'},
                  {text: 'Se interviene con los extintores'},
                  {text: 'X', alignment: 'center'},
                  {},
                  {text: 'Despachador/ Gerente de ES/Personal de mantenimiento', alignment: 'center', fontSize: 9},
                  {text: 'Extintores', alignment: 'center'},
                  {text: '40 segundos', alignment: 'center'},
              ],
              [
                  {text: '9', alignment: 'center'},
                  {text: 'Se controla el fuego'},
                  {text: 'X', alignment: 'center'},
                  {},
                  {},
                  {},
                  {text: '3 minutos', alignment: 'center'},
              ],
              [
                  {text: '10', alignment: 'center'},
                  {text: 'Se atiende personal herido'},
                  {text: 'X', alignment: 'center'},
                  {},
                  {},
                  {text: 'Botiquín', alignment: 'center'},
                  {text: '3 minutos', alignment: 'center'},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [20, 220, 303],
            body: [
              [
                {text: '4.  UBICACIÓN DE LOS RECURSOS EN EL SITIO', bold: true, fillColor: '#ddd', colSpan: 3},
                {},
                {},
              ],
              [
                {text: '1.', alignment: 'center'},
                {text: 'Extintores'},
                {text: 'Área de Despacho', alignment: 'center'}
              ],
              [
                {text: '2.', alignment: 'center'},
                {text: 'Paros de emergencia'},
                {text: 'Área de Despacho, columnas', alignment: 'center'}
              ],
              [
                {text: '3.', alignment: 'center'},
                {text: 'Válvulas de cierre'},
                {text: 'Dispensarios (parte inferior y en mangueras)', alignment: 'center'}
              ],
              [
                {text: '4.', alignment: 'center'},
                {text: 'Interruptores'},
                {text: 'Área de Despacho (paros de emergencia)', alignment: 'center'}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [20, 220, 303],
            body: [
              [
                {text: '5.  OBSERVADORES', bold: true, fillColor: '#ddd', colSpan: 3},
                {},
                {},
              ],
              [
                {text: 'No.', alignment: 'center', bold: true},
                {text: 'NOMBRE', alignment: 'center', bold: true},
                {text: 'UBICACIÓN', alignment: 'center', bold: true}
              ],
              [
                {text: '1.', alignment: 'center'},
                {},
                {}
              ],
              [
                {text: '2.', alignment: 'center'},
                {},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [276, 276],
            body: [
              [
                {text: '6. AUTORIZACIÓN', bold: true, fillColor: '#ddd', colSpan: 2},
                {}
              ],
              [
                {text: 'PROPONE:\n\nGamaliel Chavarría\nENCARGADO', alignment: 'center'},
                {text: 'APROBADO POR:\n\nSergio Lechuga\nREPRESENTANTE TÉCNICO', alignment: 'center'}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Planeacion de simulacros');
  }
  
  pdf2() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background(currentPage, pageSize) {
      //   return {
      //     image: ``,
      //     width: 290,
      //     height: 400,
      //     absolutePosition: {x: 170, y: 210},
      //     opacity: 0.4
      //   };
      // },
      header() {
        return {
          table: {
            widths: [150, 400],
            heights: [30, 10, 10],
            body: [
              [
                {
                  image: ``,
                  width: 45,
                  height: 60,
                  alignment: 'left',
                  border: [true, true, false, true],
                  margin: [7, 0]
                },
                {
                  text: ``,
                  bold: true,
                  fontSize: 15,
                  alignment: 'center',
                  margin: [0, 15],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XIII. PREPARACIÓN Y RESPUESTA DE EMERGENCIAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                },
                {}
              ],
              [
                {
                  text: 'EVALUACIÓN DE SIMULACROS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#ddd',
                },
              ]
            ]
          },
          margin: [22, 15]
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: ``,
                  pageBreak: 'after',
                  width: 510,
                  height: 60,
                },
              ],
              [''],
            ]
          },
          layout: 'headerLineOnly',
          margin: [50, 20],
        };
      },
      content: [
        {
          table: {
            widths: [559],
            heights: [10],
            body: [
              [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
            ]
          },
        },
        {
          table: {
            widths: [250, 300],
            heights: [10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: `ÁREA: Despacho`, bold: true, fillColor: '#ddd'},
                {text: `FECHA Y HORA PROGRAMADA: `, bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'EQUIPO: Dispensario, mangueras y válvulas de corte', bold: true, fillColor: '#ddd'},
                {text: `CON AVISO PREVIO: `, bold: true, fillColor: '#ddd'}
              ],
              [
                {text: `CLASE DE SIMULACRO: `, bold: true, fillColor: '#ddd'},
                {text: 'AGENTE PERTURBADOR: Fuego', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:', bold: true, fillColor: '#ddd', colSpan: 2}
              ],
              [
                {text: ``, colSpan: 2, rowSpan: 3}
              ],
              [
                {text: ''}
              ],
              [
                {text: ''}
              ],
            ],
          },
        },
        {text: '\n\n'},
        {
          table: {
            widths: [70, 200, 270],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: 'EVALUACIÓN', bold: true, fillColor: '#ddd', colSpan: 3},
                {text: ''},
                {text: ''}
              ],
              [
                {text: 'OBJETIVO', bold: true, fillColor: '#ddd', aligment: 'center'},
                {text: 'CONCEPTOS EVALUADOS', bold: true, fillColor: '#ddd', aligment: 'center'},
                {text: 'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor: '#ddd', aligment: 'center'}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
              [
                {},
                {},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [559], heights: [10, 70],
            body: [
              [
                {text: '3. OBSERVACIONES', bold: true, fillColor: '#ddd'}
              ],
              [{}]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [559],
            heights: [10, 70],
            body: [
              [{text: '4. CONCLUSIONES', bold: true, fillColor: '#ddd'}],
              [{}],
            ],
          },
        },
        {text: '\n'},
        {
          table: {
            widths: [186, 186, 180], heights: [10, 80],
            body: [
              [
                {text: '5. AUTORIZACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd', colSpan: 3}
              ],
              [
                {text: 'PROPONE:', aligment: 'center'},
                {text: 'APROBADO POR:', aligment: 'center'},
                {text: 'AUTORIZA:', aligment: 'center'}
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
      },
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Evaluacion de simulacro');
  }
}
