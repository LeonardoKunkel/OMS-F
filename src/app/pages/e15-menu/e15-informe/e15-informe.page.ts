import { PdfMakerService } from './../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e15-informe',
  templateUrl: './e15-informe.page.html',
  styleUrls: ['./e15-informe.page.scss'],
})
export class E15InformePage implements OnInit {

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  pdf() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background(currentPage, pageSize) {
      //   return {
      //     image: `${marcaAgua}`,
      //     width: 300,
      //     height: 350,
      //     absolutePosition: {x: 150, y: 160},
      //     opacity: 0.5
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
                  // image: `${iconoEstacion}`,
                  // width: 65,
                  // height: 80,
                  // alignment: 'center',
                  // border: [true, true, false, true],
                },
                {
                  text: `Nombre de la Estación`,
                  bold: true,
                  fontSize: 25,
                  margin: [55, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'INFORME DE AUDITORÍA',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'XV. AUDITORÍAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true],
                },
                {}
              ]
            ]
          },
          margin: [22, 15],
          layout: {
            defaultBorder: false
          }
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
                  // image: `${footer}`,
                  // pageBreak: 'after',
                  // width: 510,
                  // height: 60,
                },
              ],
              [''],
            ]
          },
          layout: 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        {
          table: {
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: `ORIGEN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `Programa de auditoría interna`, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `FECHA DE EJECUCIÓN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3, alignment: 'center'},
                {},
                {},
                {text: `Enero de ${year}`, fontSize: 9, colSpan: 4, bold: true},
                {},
                {},
                {},
              ],
              [
                {text: `TIPO DE AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 3},
                {},
                {},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 5},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `OBJETIVO DE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `ALCANCE DE LA AUDITORIA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `AUDITOR LÍDER`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `AUDITOR 1`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
              ],
              [
                {text: `PERSONAL QUE ATIENDE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NOMBRE`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 4, alignment: 'center'},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: `NOMBRE`, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 4},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold:  true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {
          table: {
            widths: [15, 150, 170, 10, 15, 150],
            heights: [10, 10, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            body: [
              [
                {text: `RESULTADO DE AUDITORÍA`, fontSize: 9, colSpan: 6, bold: true, fillColor: '#a5c3dd'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NO.`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `HALLAZGO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `ELEMENTO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `C`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `NC`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'}
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            heights: [8, 40, 10, 40],
            widths: [560],
            body: [
              [{text: 'OPORTUNIDADES DE MEJORA', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}],
              [{text: 'CONCLUSIONES', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [230, 230],
            heights: [10, 30, 30],
            body: [
              [
                {
                  text: 'AUDITOR LÍDER',
                  fillColor: '#a5c3dd',
                  bold: true,
                  fontSize: 9,
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  text: 'REPRESENTANTE TÉCNICO',
                  fillColor: '#a5c3dd',
                  border: [true, true, true, false],
                  bold: true,
                  fontSize: 9,
                  alignment: 'center'
                }
              ],
              [
                {
                  text: '',
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  // image: `${firmaRepresentanteTecnico}`,
                  // fit: [100, 30],
                  // alignment: 'center',
                  // border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `NOMBRE Y FIRMA`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `NOMBRE Y FIRMA\n Nombre`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          margin: [22, 0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 150]
    };
    this.pdfMaker.generate(dd, 'prueba');
  }

  pdf2() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background(currentPage, pageSize) {
      //   return {
      //     image: `${marcaAgua}`,
      //     width: 300,
      //     height: 350,
      //     absolutePosition: {x: 150, y: 160},
      //     opacity: 0.5
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
                  // image: `${iconoEstacion}`,
                  // width: 65,
                  // height: 80,
                  // alignment: 'center',
                  // border: [true, true, false, true]
                },
                {
                  text: `Nombre de la Estación`,
                  bold: true,
                  fontSize: 25,
                  margin: [55, 20],
                  border: [false, true, true, true]
                }
              ],
              [
                {
                  text: 'INFORME DE AUDITORÍA',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true]
                },
                {}
              ],
              [
                {
                  text: 'XV. AUDITORÍAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true]
                },
                {}
              ]
            ]
          },
          margin: [22, 15],
          layout: {
            defaultBorder: false
          }
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
                  // image: `${footer}`,
                  // pageBreak: 'after',
                  // width: 510,
                  // height: 60,
                }
              ],
              [''],
            ]
          },
          layout : 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        {
          table: {
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: `ORIGEN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `Programa de auditoría interna`, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `FECHA DE EJECUCIÓN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3, alignment: 'center'},
                {},
                {},
                {text: `Diciembre de ${year}`, fontSize: 9, colSpan: 4, bold: true},
                {},
                {},
                {},
              ],
              [
                {text: `TIPO DE AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 3},
                {},
                {},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 5},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `OBJETIVO DE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `ALCANCE DE LA AUDITORIA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `AUDITOR LÍDER`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `AUDITOR 1`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
              ],
              [
                {text: `PERSONAL QUE ATIENDE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NOMBRE`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 4, alignment: 'center'},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: `NOMBRE`, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 4},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {
          table: {
            widths: [15, 150, 170, 10, 15, 150],
            heights: [10, 10, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            body: [
              [
                {text: `RESULTADO DE AUDITORÍA`, fontSize: 9, colSpan: 6, bold: true, fillColor: '#a5c3dd'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NO.`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `HALLAZGO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `ELEMENTO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text:  `C`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `NC`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'}
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            heights: [8, 40, 10, 40],
            widths: [560],
            body: [
              [{text: 'OPORTUNIDADES DE MEJORA', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}],
              [{text: 'CONCLUSIONES', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [230, 230],
            heights: [10, 30, 30],
            body: [
              [
                {
                  text: 'AUDITOR LÍDER',
                  fillColor: '#a5c3dd',
                  bold: true,
                  fontSize: 9,
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  text: 'REPRESENTANTE TÉCNICO',
                  fillColor: '#a5c3dd',
                  border: [true, true, true, false],
                  bold: true,
                  fontSize: 9,
                  alignment: 'center'
                }
              ],
              [
                {
                  text: '',
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  // image: `${firmaRepresentanteTecnico}`,
                  // fit: [100, 30],
                  // alignment: 'center',
                  // border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `NOMBRE Y FIRMA`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `NOMBRE Y FIRMA\n Nombre`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          margin: [22, 0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 150]
    };
    this.pdfMaker.generate(dd, 'prueba');
  }
}
