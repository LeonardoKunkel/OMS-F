import { PdfMakerService } from './../../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper'

@Component({
  selector: 'app-e12-anexo',
  templateUrl: './e12-anexo.page.html',
  styleUrls: ['./e12-anexo.page.scss'],
})
export class E12AnexoPage implements OnInit {

  array: any = [
    {
      text: 'Texto'
    },
    {
      text: 'Texto2'
    },
    {
      text: 'Texto3'
    },
  ];

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  pdf() {
    const dd = {
      header() {
        return {
          table: {
            widths: [100, 450],
            heights: [50, 15, 15],
            body: [
              [
                {},
                {}
              ],
              [
                {
                  text: 'XII. SEGURIDAD DE CONTRATISTAS',
                  colSpan: 2,
                  alignment: 'center',
                  fontSize: 11
                }
              ],
              [
                {
                  text: 'ANEXO DE SEGURIDAD PARA CONTRATISTAS',
                  colSpan: 2,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                }
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          table: {
            widths: [558],
            body: [
              [
                {text: 'OBJETIVO', bold: true, fillColor: '#ddd'}
              ],
              [
                {
                  text: `Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.`,
                  fontSize: 11
                }
              ],
              [
                {text: 'ALCANCE', bold: true, fillColor: '#ddd'}
              ],
              [
                {
                  stack: [
                    `Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:`,
                    {
                      ol: [
                        'Trabajos con escaleras y plataformas en alturas amyores a 1.5 m.',
                        'Trabajos en áreas confinadas.',
                        'Trabajos con herramientas que genera fuente de ignición.',
                        'Trabajos en instalaciones eléctricas',
                        'Trabajos en equipos y accesorios',
                        'Suministro de poductos inflamables y combustibles.'
                      ]
                    }
                  ],
                  fontSize: 11
                },
              ],
              [
                {text: 'MEDIDAS PREVENTIVAS GENERALES', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'El personal de las compañías contratistas, debe portar ropa de algodón.', fontSize: 11}
              ],
              [
                {text: 'Está prohibido encender fuego, fumar, introducir cerillos y encendedores a la estación de servicio.', fontSize: 11}
              ],
              [
                {text: 'Está prohibido introducir bebidas empriagantes, drogas o entrar bajo en efecto de dichas sustancias.', fontSize: 11}
              ],
              [
                {text: 'Mantener el orden y la limpieza en el área de trabajo.', fontSize: 11}
              ],
              [
                {text: 'Está restringido el uso de cámáras fotográficas y teléfonos celulares en las áreas de despacho o de almacenamiento.', fontSize: 11}
              ],
              [
                {text: 'No se debe realizar un trabajo si no se ha generado el permiso de trabajo peligrosos correspondiente.', fontSize: 11}
              ],
              [
                {text: 'Respetar el horario de trabajo establecido por el responsable de la Estación de servicio.', fontSize: 11}
              ],
              [
                {text: 'Están prohibidas las bromas y el retoso dentro de la estación de servicio.', fontSize: 11}
              ],
              [
                {text: 'No se deben manipular equipos o accesorios sin autorización.', fontSize: 11}
              ],
              [
                {text: 'EQUIPO DE PROTECCIÓN PERSONAL', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.', fontSize: 11}
              ],
              [
                {text: 'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desarrollar.', fontSize: 11}
              ],
              [
                {text: 'El equipo de protección personal debe  estar en buen estado y de la talla adecuada.', fontSize: 11}
              ],
              [
                {text: 'Los cables de vida y arnés deben contar con registros de revisión.', fontSize: 11}
              ],
              [
                {text: 'USO DE HERRAMIENTA', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.', fontSize: 11}
              ],
              [
                {text: 'La Herramienta eléctrica debe aterrizarse durante su uso.', fontSize: 11}
              ],
              [
                {text: 'La herramienta solo debe utilizarse para el fin que esta destinada, estrá prohibido darle otro uso.', fontSize: 11}
              ],
              [
                {text: 'Las  caladoras deben contar con su guarda correspondiente.', fontSize: 11}
              ],
              [
                {text: 'Está prohibido el uso de herramienta hechiza.', fontSize: 11}
              ],
              [
                {text: 'Las extensiones eléctricas deben ser de uso rudo.', fontSize: 11}
              ],
              [
                {text: 'Están prohibidos los empates en las extensiones eléctricas.', fontSize: 11}
              ],
              [
                {text: 'PROCEDIMIENTOS', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: 'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar', fontSize: 11}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate('Anexo', dd);
  }
}
