import { PdfMakerService } from './../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e15-plan',
  templateUrl: './e15-plan.page.html',
  styleUrls: ['./e15-plan.page.scss'],
})
export class E15PlanPage implements OnInit {

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  pdf() {
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    var dd = {
      // background: function(currentPage, pageSize) {
      //   return {
      //     image: `${marcaAgua}`,
      //     width: 300,
      //     height: 350, 
      //     absolutePosition: {x: 150, y: 160},
      //     opacity: 0.5
      //   }
      // },
      header: function() {
        return {
          table:{
            widths: [150,400],
            heights: [30,10,10],  
            body:[
              [
                {
                    // image:`${iconoEstacion}`,
                    // width: 65,
                    // height: 80,
                    // alignment:'center',
                    // border:[true,true,false,true],
                },
                {
                  text:`Nombre de la Estación`,
                  bold: true,
                  fontSize: 25,
                  margin: [55,20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                    text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },
                {}
              ],
              [
                {
                  text:'XV. AUDITORÍAS',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                },
                {}
              ]
            ]
          },
          margin: [22,15],
          layout:{
            defaultBorder: false
          }
        };
      },
      footer(currentPage, pageCount) {
        return {
          table:{
            headerRows: 1, 
            widths: [510],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text:`P-SA-01 Rev.0, ${day}/${month}/${year}`,width: 180}
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
          layout : 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        {
          table: { 
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 20, 10, 20],
            body: [
              [
                {
                  text:`ORIGEN`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  alignment: 'center'
                },
                {
                  text: `Programa de auditoría interna`,
                  fontSize: 9,
                  colSpan: 4
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {
                  text: `FECHA DE EJECUCIÓN`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 3,
                  alignment: 'center'
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {
                  text: `Enero de ${year}`,
                  fontSize: 9,
                  colSpan: 4,
                  bold: true
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `TIPO DE AUDITORÍA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  alignment: 'center',
                  colSpan: 3
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {
                  text: `CRITERIO`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  alignment: 'center',
                  colSpan: 2
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `OBJETIVO DE LA AUDITORÍA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 12
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `OBJETIVO DE LA AUDITORÍA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 12
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `AUDITOR LÍDER`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 2
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {
                  text: `AUDITOR 1`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 2
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: `FECHA Y HORA DE APERTURA `,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {
                  text: `FECHA Y HORA DE CIERRE`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 3
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: `FECHA Y HORA `, fontSize: 9, fillColor: '#a5c3dd'},
                {
                  text: `ELEMENTO DEL SISTEMA DE ADMINISTRACIÓN`,
                  fontSize: 9,
                  fillColor: '#a5c3dd',
                  colSpan: 5
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `AUDITOR`, fontSize: 9, fillColor: '#a5c3dd', colSpan: 2},
                {text: ``, fontSize: 9},
                {text: `OBSERVACIONES`, fontSize: 9, fillColor: '#a5c3dd', colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `ASIGNACIÓN DE RECURSOS`,
                  fontSize: 9,
                  colSpan: 12,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `PERSONAL QUE PARTICIPA EN LA AUDITORÍA`,
                  fontSize: 9,
                  colSpan: 12,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [200, 200, 100],
            heights: [30, 30],
            body: [
              [
                {
                  //  image:`${firmaRepresentanteTecnico}`,
                  //  fit:[100,30],
                  //  alignment:'center',
                  //  border:[true,true,true,false]
                },
                {
                  //  image:`${firmaEstacion}`,
                  //  fit:[100,30],
                  //  alignment:'center',
                  //  border:[true,true,true,false]
                },
                {
                  text:' ',
                  fit:[100,50],
                  alignment:'center',
                  border:[true,true,true,false]
                }
              ],
              [
                {
                  text: `REVISADO POR:\n Nombre \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `REVISADO POR:\n Nombre \n MÁXIMA AUTORIDAD`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `FECHA \n ${day}/${month}/${year}`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                }
              ]
            ]
          },
          layout:{
            defaultBorder: false
          },
          margin:[22,0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22,150]
    };
    this.pdfMaker.generate(dd,'gaga')
  }
  
  pdf2() {
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    var dd = {
      // background: function(currentPage, pageSize) {
      //   return {
      //     image: `${marcaAgua}`,
      //     width: 300,
      //     height: 350, 
      //     absolutePosition: {x: 150, y: 160},
      //     opacity: 0.5
      //   }
      // },
      header() {
        return {
          table:{
            widths: [150,400],
            heights: [30,10,10],  
            body: [
              [
                {
                  // image: `${iconoEstacion}`,
                  // width: 65,
                  // height: 80,
                  // alignment: 'center',
                  // border: [true,true,false,true]
                },
                {
                  text:`Nombre de la Estación`,
                  bold: true,
                  fontSize: 25,
                  margin: [55, 20],
                  border:[false,true,true,true],
                }
              ],
              [
                {
                  text: 'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',
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
          margin: [22,15],
          layout:{
            defaultBorder: false
          }
        };
      },
      footer(currentPage, pageCount) {
        return {
          table:{
            headerRows: 1, 
            widths: [510],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {
                      text:`P-SA-01 Rev.0, ${day}/${month}/${year}`,
                      width: 180
                    }
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
          table:{ 
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 20, 10, 20],
            body:[
              [
                {text: `ORIGEN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `Programa de auditoría interna`, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `FECHA DE EJECUCIÓN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3, alignment: 'center'},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `Diciembre de ${year}`, fontSize: 9, colSpan: 4, bold: true},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `TIPO DE AUDITORÍA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  alignment: 'center',
                  colSpan: 3
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9,colSpan:5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `OBJETIVO DE LA AUDITORÍA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 12
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: `OBJETIVO DE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `AUDITOR LÍDER`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd',
                  colSpan: 2
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `AUDITOR 1`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: `FECHA Y HORA DE APERTURA `, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `FECHA Y HORA DE CIERRE`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 3},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `FECHA Y HORA `,
                  fontSize: 9,
                  fillColor: '#a5c3dd'
                },
                {
                  text: `ELEMENTO DEL SISTEMA DE ADMINISTRACIÓN `,
                  fontSize: 9,
                  fillColor: '#a5c3dd',
                  colSpan: 5
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: `AUDITOR`, fontSize: 9, fillColor: '#a5c3dd', colSpan: 2},
                {text: ``, fontSize: 9},
                {text: `OBSERVACIONES`, fontSize: 9, fillColor: '#a5c3dd', colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 5},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 2},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9, colSpan: 4},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `ASIGNACIÓN DE RECURSOS`,
                  fontSize: 9,
                  colSpan: 12,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {
                  text: `PERSONAL QUE PARTICIPA EN LA AUDITORÍA`,
                  fontSize: 9,
                  colSpan: 12,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
                {text: ``, fontSize: 9},
              ],
            ]
          }
        },
        {text:'\n'},
        {
          table: {
            widths: [200, 200, 100],
            heights: [30, 30],
            body: [
              [
                {
                  // image: `${firmaRepresentanteTecnico}`,
                  // fit: [100, 30],
                  // alignment: 'center',
                  // border: [true, true, true, false]
                },
                {
                  // image: `${firmaEstacion}`,
                  // fit: [100,30],
                  // alignment: 'center',
                  // border: [true, true, true, false]
                },
                {
                  text:' ',
                  fit:[100,50],
                  alignment:'center',
                  border:[true,true,true,false]
                }
              ],
              [
                {
                  text: `REVISADO POR:\n Nombre \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true,false,true,true],
                  fontSize: 7
                },
                {
                  text: `REVISADO POR:\n Nombre \n MAXIMA AUTORIDAD`,
                  alignment: 'center',
                  border: [true,false,true,true],
                  fontSize: 7
                },
                {
                  text: `FECHA \n ${day}/${month}/${year}`,
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
      pageMargins: [22,150]
    };
    this.pdfMaker.generate(dd, 'gaga')
  }
}
