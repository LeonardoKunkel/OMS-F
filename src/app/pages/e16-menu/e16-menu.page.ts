import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e16-menu',
  templateUrl: './e16-menu.page.html',
  styleUrls: ['./e16-menu.page.scss'],
})
export class E16MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }
  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }
  goProcedure() {
    this.navCtrl.navigateForward('/e16-menu/e16-procedimiento');
  }

  createFO12() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background() {
      //   return {
      //     image: `${marcaAgua}`, width: 290, height: 400,
      //     absolutePosition: {x: 250, y: 120}, opacity: 0.4
      //   };
      // },
      header: () => {
        return {
          table: {
            widths: [150, 570],
            heights: [30, 10, 10],
            body: [
              [
                {
                  // image: `${iconoEstacion}`,
                  // width: 45,
                  // height: 60,
                  // alignment: 'center',
                  // border: [true, true, false, true],
                },
                {
                  text: `Nombre de la Estación`, bold: true, fontSize: 25, alignment: 'center', margin: [15, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES',
                  alignment: 'center',
                  bold: true
                },
                {}
              ],
              [
                {
                  text: 'COMPROBACIÓN DE HIPÓTESIS DE TRABAJO',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd'
                },
                {}
              ],
            ]
          },
          margin: [22, 15]
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [650],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `FO-12 Rev. 0,  ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  // image: `${footer}`,
                  // pageBreak: 'after',
                  // alignment: 'center',
                  // width: 510,
                  // height: 60
                }
              ]
            ]
          },
          layout : 'headerLineOnly',
          margin: [50, 20]
        };
      },
      content: [
        {
          table: {
            widths: [100, 120, 130, 100, 130, 115],
            body: [
              [
                {text: 'DESCRIPCIÓN DEL INCIDENTE:\n\n', bold: true, colSpan: 6},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: 'ID DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DE ANÁLISIS', bold: true, alignment: 'center', fillColor: '#ddd'},
                {}
              ],
              [
                {text: 'ÁREA O EQUIPO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {},
                {text: 'SERVICIO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 120, 210, 100, 50, 190],
            body: [
              [
                {text: 'OBSERVACIÓN No.     ', colSpan: 2, bold: true, fontSize: 10},
                {},
                {text: 'DESCRIPCIÓN', colSpan: 4, bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'DESCRIPCIÓN DE LA HIPÓTESIS', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'ACCIÓN DE COMPROBACIÓN', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'RESPONSABLE', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'FECHA', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'RESULTADOS', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
              ],
              [
                {text: '1', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '2', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '3', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '4', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '5', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 350, 169, 169],
            body: [
              [
                {text: `PERSONAL QUE PARTICIPA EN LA
                        INVESTIGACIÓN CAUSA RAÍZ`, alignment: 'center', fillColor: '#ddd', bold: true, colSpan: 4, fontSize: 10},
                {},
                {},
                {},
              ],
              [
                {text: 'No.', alignment: 'center', bold: true, fontSize: 10},
                {text: 'NOMBRE', alignment: 'center', bold: true, fontSize: 10},
                {text: 'CARGA', alignment: 'center', bold: true, fontSize: 10},
                {text: 'FIRMA', alignment: 'center', bold: true, fontSize: 10},
              ],
              [
                {text: '1', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '2', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '3', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '4', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
            ]
          }
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Hipotesis');
  }
}
