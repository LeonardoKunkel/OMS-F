import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e17-menu',
  templateUrl: './e17-menu.page.html',
  styleUrls: ['./e17-menu.page.scss'],
})
export class E17MenuPage implements OnInit {
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
  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }
  goProcedure() {
    this.navCtrl.navigateForward('/e17-menu/e17-procedimiento');
  }

  createFS37() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background() {
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
                  text: 'INFORME DE REVISIÓN POR LA DIRECCIÓN',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'XVII. REVISIÓN DE RESULTADOS',
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
          margin: [22,  15],
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
            widths: [60, 490],
            body: [
              [
                {
                  text: `FECHA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {}
              ],
              [
                {
                  text: `HORA`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {}
              ],
              [
                {
                  text: `OBJETIVO`,
                  fontSize: 9,
                  bold: true,
                  fillColor: '#a5c3dd'
                },
                {}
              ],
              [
                {
                  text: `ELEMENTOS DE ENTRADA`,
                  fontSize: 9,
                  bold: true,
                  colSpan: 2,
                  fillColor: '#a5c3dd'
                },
                {}
              ],
              [
                {
                  ol: [
                    'Resultados de la medición de indicadores de Desempeño de SISOPA',
                    'Evaluación de Requisitos legales. ',
                    'Cumplimiento de metas y objetivos',
                    'Seguimiento de hallazgos y recomendaciones de mejora.',
                    'Auditorías',
                    'Las comunicaciones con las partes interesadas externas, incluyendo quejas y sugerencias.',
                    'Los cambios en las circunstancias, incluyendo las actualizaciones del marco normativo aplicable.',
                    'Recomendaciones de Incidentes y accidentes.'
                  ],
                  colSpan: 2,
                  fontSize: 9
                },
                {}
              ]
            ]
          }
        },
        {text: '\n1. Resultado de Indicadores de desempeño\n', bold: true, fontSize: 15},
        {text: '\n'},
        {
          table: {
            widths: [15, 220, 50, 120, 50, 60],
            body: [
              [
                {text: `No.`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `INDICADOR`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `SIGLAS`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `RESULTADO ANTERIOR (%)`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `META {2020} (%)`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `INDICADOR (%)`, bold: true, fontSize: 9, fillColor: '#a5c3dd', alignment: 'center'},
              ],
              [
                {text: '1', fontSize: 9},
                {text: 'ÍNDICE DE FRECUENCIA ', fontSize: 9},
                {text: 'I.F', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '2', fontSize: 9},
                {text: 'ÍNDICE DE GRAVEDAD', fontSize: 9},
                {text: 'I.G.', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '3', fontSize: 9},
                {text: 'CUMPLIMIENTO DE ICR´s', fontSize: 9},
                {text: 'I.ICR ', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '4', fontSize: 9},
                {text: 'ÍNDICE DE CAPACITACIÓN PROCEDIMIENTOS', fontSize: 9},
                {text: 'I.CAP', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '5 ', fontSize: 9},
                {text: 'CUMPLIMIENTO PROGRAMA DE SIMULACROS', fontSize: 9},
                {text: 'I.SIM', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '6', fontSize: 9},
                {text: 'DISPOSICIÓN DE RESIDUOS', fontSize: 9},
                {text: 'I.RES', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '7', fontSize: 9},
                {text: 'CUMPLIMIENTO PROG. MANTTO', fontSize: 9},
                {text: 'I.IM', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '8', fontSize: 9},
                {text: 'ATENCIÓN HALLAZGOS AUDITORIA', fontSize: 9},
                {text: 'I.HA', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '9', fontSize: 9},
                {text: 'PRUEBAS DE EQUIPOS DE SEGURIDAD', fontSize: 9},
                {text: 'I.PE', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '10', fontSize: 9},
                {text: 'ATENCIÓN RECOMENDACIONES', fontSize: 9},
                {text: 'I.REC', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '11', fontSize: 9},
                {text: 'CUMPLIMIENTO DE REQUISITOS LEGALES', fontSize: 9},
                {text: 'I.RG', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '12', fontSize: 9},
                {text: 'CONTAMINACIONES (AIRE, AGUA, SUELO) ', fontSize: 9},
                {text: 'I.AAS ', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '13', fontSize: 9},
                {text: 'PROGRAMA DE LIMPIEZA', fontSize: 9},
                {text: 'I.LIM ', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '14', fontSize: 9},
                {text: 'PRUEBAS DE HERMETICIDAD ', fontSize: 9},
                {text: 'I.PH', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ],
              [
                {text: '15', fontSize: 9},
                {text: 'CUMPLIMIENTO DE COMUNICACIONES', fontSize: 9},
                {text: 'I.CO ', fontSize: 9, alignment: 'center'},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: `\n2. Evaluación de Requisitos legales`, fontSize: 15},
        {text: '\n'},
        {
          table: {
            widths: [95, 25, 25, 95, 25, 250],
            body: [
              [
                {text: `REQUISITOS LEGALES TOTALES`, fontSize: 9, fillColor: '#a5c3dd', bold: true, alignment: 'center', colSpan: 5},
                {},
                {},
                {},
                {},
                {text: `ACCIÓN DE MEJORA`, fontSize: 9, fillColor: '#a5c3dd', bold: true, alignment: 'center', rowSpan: 2},
              ],
              [
                {text: `CALIFICACIÓN `, fontSize: 9, colSpan: 2, fillColor: '#a5c3dd', bold: true, alignment: 'center'},
                {},
                {text: `NO.`, fontSize: 9, fillColor: '#a5c3dd', bold: true, alignment: 'center'},
                {text: `CUMPLIMIENTO`, fontSize: 9, colSpan: 2, fillColor: '#a5c3dd', bold: true, alignment: 'center'},
                {},
                {},
              ],
              [
                {text: `No se cumple`, fontSize: 9},
                {text: `0`, fontSize: 9},
                {},
                {text: `Puntos máximos`, fontSize: 9},
                {},
                {},
              ],
              [
                {text: `Cumplimiento parcial `, fontSize: 9},
                {text: `1`, fontSize: 9},
                {},
                {text: `Puntos obtenidos`, fontSize: 9},
                {},
                {},
              ],
              [
                {text: `Cumplimiento total `, fontSize: 9},
                {text: `2`, fontSize: 9},
                {},
                {text: `% Cumplimiento`, fontSize: 9},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n3. Objetivos y Metas', fontSize: 15},
        {text: '\n'},
        {
          table: {
            widths: [15, 100, 160, 80, 80, 80],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: 'No', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'OBJETIVO', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'METAS', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'INDICADOR ', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'CRITERIO DE ACEPTACIÓN', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'GRADO DE CUMPLIMIENTO', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
              ],
              [
                {text: `1`, fontSize: 9, rowSpan: 3},
                {text: ``, fontSize: 9, rowSpan: 3},
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
                {text: `2`, fontSize: 9, rowSpan: 3},
                {text: ``, fontSize: 9, rowSpan: 3},
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
                {text: `3`, fontSize: 9, rowSpan: 3},
                {text: ``, fontSize: 9, rowSpan: 3},
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
                {text: `4`, fontSize: 9, rowSpan: 3},
                {text: ``, fontSize: 9, rowSpan: 3},
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
        {text: '\n4. Seguimiento de hallazgos y recomendaciones de mejora.', fontSize: 15, bold: true},
        {text: '\n'},
        {
          table: {
            widths: [40, 150, 100, 45, 45, 45, 80],
            heights: [10, 10, 20, 20, 20],
            body: [
              [
                {text: 'NO.\nREVISIÓN', fontSize: 9, rowSpan: 2, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {
                  text: 'ACUERDO O ACCIÓN DE MEJORA (Descripción breve)',
                  rowSpan: 2,
                  fontSize: 10,
                  bold: true,
                  fillColor: '#a5c3dd',
                  alignment: 'center'
                },
                {text: 'FECHA DE CUMPLIMIENTO', fontSize: 9, rowSpan: 2, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'ESTADO DE ACCIONES', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 3},
                {},
                {},
                {text: 'OBSERVACIONES', fontSize: 9, rowSpan: 2, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
              ],
              [
                {},
                {},
                {},
                {text: 'CUMPLIDO ', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'EN PROCESO', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'NO CUMPLIDO', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {},
              ],
              [
                {},
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
                {},
              ],
              [
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
        {text: '\n6. Comunicaciones con partes interesadas', bold: true, fontSize: 15},
        {text: '\n'},
        {
          table: {
            widths: [120, 60, 60, 60, 60, 160],
            body: [
              [
                {text: 'COMUNICACIONES', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'RECIBIDAS', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'ATENDIDAS', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'NO ATENDIDAS', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: '% DE ATENCIÓN', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: 'ACCIONES DE MEJORA', fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
              ],
              [
                {text: 'Quejas ', fontSize: 9},
                {},
                {},
                {},
                {},
                {text: '', fontSize: 9, rowSpan: 3},
              ],
              [
                {text: 'Sugerencias', fontSize: 9},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                  {text: 'Solicitud de Información', fontSize: 9},
                  {},
                  {},
                  {},
                  {},
                  {},
              ],
              [
                {text: 'Reporte de actos o condiciones inseguras', fontSize: 9},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\nComunicaciones realizadas', fontSize: 15},
        {text: '\n'},
        {
          table: {
            widths: [15, 195, 60, 70, 190],
            body: [
              [
                {text: 'No.', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                {text: 'CONCEPTO', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                {text: 'PERSONAL', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                {text: 'CONTRATISTAS', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                {text: 'OBSERVACIONES', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
              ],
              [
                {text: `1`, fontSize: 9},
                {text: `Política`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `2`, fontSize: 9},
                {text: `Cumplimiento de, objetivos y Metas`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `3`, fontSize: 9},
                {text: `Funciones, responsabilidad y autoridad`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `4`, fontSize: 9},
                {text: `Riesgos e impactos ambientales`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `5`, fontSize: 9},
                {text: `Requisitos legales`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `6`, fontSize: 9},
                {text: `Incidentes y accidentes`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `7`, fontSize: 9},
                {text: `Resultados de auditorías`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `8`, fontSize: 9},
                {text: `Resultados del desempeño`, fontSize: 9},
                {},
                {},
                {},
              ],
              [
                {text: `9`, fontSize: 9},
                {text: `Comunicaciones a contratistas`, fontSize: 9},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n7. Cambios en las circunstancias'},
        {text: '\n'},
        {
          table: {
            widths: [150, 400],
            body: [
              [
                {text: 'ORIGEN', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                {text: 'MOTIVO', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
              ],
              [
                {text: 'Cambio en marco normativo ', fontSize: 9},
                {},
              ],
              [
                {text: 'Cambio en instalaciones', fontSize: 9},
                {},
              ],
              [
                {text: 'Cambios de personal ', fontSize: 9},
                {},
              ],
              [
                {text: 'Otros', fontSize: 9},
                {},
              ]
            ]
          }
        },
        {text: '\n8. Recomendaciones de incidentes y accidentes.'},
        {text: '\n'},
        {
          table: {
              widths: [150, 50, 340],
              body: [
                [
                  {text: 'CLASE DE INCIDENTE', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                  {text: 'CANTIDAD', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                  {text: 'DESCRIPCIÓN', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                ],
                [
                  {text: 'Incidente incapacitante', fontSize: 9},
                  {},
                  {},
                ],
                [
                  {text: 'Desprendimiento de manguera en dispensarios', fontSize: 9},
                  {},
                  {},
                ],
                [
                  {text: 'Fugas', fontSize: 9},
                  {},
                  {},
                ],
                [
                  {text: 'Derrame', fontSize: 9},
                  {},
                  {},
                ],
                [
                  {text: 'Incendio', fontSize: 9},
                  {},
                  {},
                ],
                [
                  {text: 'Impactos ambientales', fontSize: 9},
                  {},
                  {},
                ]
              ]          }
            },
            {text: '\nEstado de análisis y recomendaciones derivadas de incidentes.'},
            {text: '\n'},
            {
              table: {
                widths: [105, 60, 100, 50, 50, 50, 100],
                heights: [10, 10, 10, 20, 10, 20],
                body: [
                  [
                    {text: 'INVESTIGACIONES DE CAUSA RAÍZ', bold: true, colSpan: 7, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'ANÁLISIS DE CAUSA RAÍZ', bold: true, colSpan: 3, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {},
                    {},
                    {text: 'RECOMENDACIONES', colSpan: 4, bold: true, fontSize: 9, alnment: 'center', fillColor: '#a5c3dd'},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'REQUERIDOS', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: 'REALIZADOS ', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: '% CUMPLIMIENTO', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: 'EMITIDAS', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: 'ATENDIDAS', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: 'VENCIDAS', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                    {text: '% CUMPLIMIENTO', bold: true, fontSize: 9, alignment: 'center', fillColor: '#a5c3dd'},
                  ],
                  [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'ACCIONES DE MEJORA', colSpan: 7, bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: '', colSpan: 7},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                  ],
                ]
              }
            },
            {text: '\n9. Evaluación de la Política'},
            {text: '\n'},
            {
              table: {
                widths: [240, 25, 25, 250],
                body: [
                  [
                    {text: 'CONCEPTO', bold: true, fontSize: 9, fillColor: '#a5c3dd', rowSpan: 2, alignment: 'center'},
                    {text: 'CUMPLE', bold: true, fontSize: 9, fillColor: '#a5c3dd', colSpan: 2, alignment: 'center'},
                    {},
                    {text: 'CAMBIO REQUERIDO', bold: true, fontSize: 9, fillColor: '#a5c3dd', rowSpan: 2, alignment: 'center'},
                  ],
                  [
                    {},
                    {text: 'SI', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {text: 'NO', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {},
                  ],
                  [
                    {text: 'Se utiliza como marco de referencia para establecer los objetivos del SASISOPA?', fontSize: 9},
                    {},
                    {},
                    {},
                  ],
                  [
                    {
                      text: `Considera el control de los aspectos ambientales y peligros y evaluación de
                            los riesgos e impactos ambientales, asociados a la instalación?`,
                      fontSize: 9
                    },
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'Considera el cumplimiento de los requisitos legales?', fontSize: 9},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'Considera la participación del personal?', fontSize: 9},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: 'Considera el compromiso para la mejora continua?', fontSize: 9},
                    {},
                    {},
                    {},
                  ]
                ]
              }
            },
            {text: '\n10.Decisiones relativas a las oportunidades de mejora', fontSize: 15},
            {text: '\n'},
            {
              table: {
                widths: [15, 170, 170, 100, 70],
                body: [
                  [
                    {text: 'NO', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {text: 'OPORTUNIDAD DE MEJORA', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {text: 'ACCIONES', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {text: 'RESPONSABLE', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                    {text: 'FECHA COMPROMISO', bold: true, fontSize: 9, fillColor: '#a5c3dd'},
                  ],
                  [
                    {text: '1', fontSize: 9},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: '2', fontSize: 9},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: '3', fontSize: 9},
                    {},
                    {},
                    {},
                    {},
                  ],
                  [
                    {text: '4', fontSize: 9},
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
                widths: [560],
                heights: [10, 90],
                body: [
                  [
                    {text: 'FECHA COMPROMISO', bold: true, fontSize: 9, fillColor: '#a5c3dd'}
                  ],
                  [
                    {}
                  ]
                ]
              }
            },
            {text:  '\n'},
            {
              table: {
                widths: [230, 230],
                heights: [10, 30],
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
                      // fit: [100, 30],
                      // alignment: 'center',
                      // border: [true, true, true, false]
                    }
                  ],
                  [
                    {
                      text: `Reviso\nNombre\nREPRESENTANTE TÉCNICO`,
                      alignment: 'center',
                      border: [true, false, true, true],
                      fontSize: 7
                    },
                    {
                      text: `Nombre\nMÁXIMA AUTORIDAD`,
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
              margin: [42, 0]
            }
          ],
        pageSize: 'LETTER',
        pageMargins: [22, 150]
      };
    this.pdfMaker.generate(dd, 'imprimir');
  }
}
