import { PdfMakerService } from './../../services/pdf-maker.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e13-menu',
  templateUrl: './e13-menu.page.html',
  styleUrls: ['./e13-menu.page.scss'],
})
export class E13MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
  }
  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goPrograma() {
    this.navCtrl.navigateForward('/e13-menu/e13-programa');
  }

  goActa() {
    this.navCtrl.navigateForward('/e13-menu/e13-acta');
  }

  goProcedure() {
    this.navCtrl.navigateForward('/e13-menu/e13-procedimiento');
  }
  
  pdf() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const dd = {
      // background() {
      //   return {
      //     image: `${marcaAgua}`,
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
                  // image: `${iconoEstacion}`,
                  // width: 45,
                  // height: 60,
                  // alignment: 'center',
                  // border: [true, true, false, true],
                },
                {
                  text: `Nombre de la Estación`,
                  bold: true,
                  fontSize: 17,
                  alignment: 'center',
                  margin: [0, 15],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS',
                  alignment: 'center',
                  bold: true,
                  colSpan: 2
                },
                {}
              ],
              [
                {
                  text: 'ACTA DE CONFORMACIÓN DE LAS BRIGADAS DE RESPUESTA A EMERGENCIAS',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd',
                  colSpan: 2
                },
                {}
              ],
            ]
          },
          margin: [22, 15],
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
                    {text: `FS-09 Rev. 0,  ${day}/${month}/${year}`, width: 180}
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
              ]
            ]
          },
          layout : 'headerLineOnly',
          margin: [50, 20]
        };
      },
      content: [
        {
          text: `En la ciudad de xxxxxxx, Estado de xxxxxxxx siendo las doce horas del día x de xxxxx de
                2019 se reúnen en el inmueble ubicado en A. o calle, No. Colonia, C.P. 00000,  que ocupa la
                Estación de servicio XXXXXXXX. con objeto de conformar formalmente las Brigadas de Respuesta
                a Emergencia de conformidad con los preceptos legales aplicables. El desempeño de estas comisiones
                no significa nuevo nombramiento o cambio de las condiciones de la relación laboral con la empresa,
                por considerarse una obligación para el trabajador, sin representar remuneración alguna.\n\n`,
          fontSize: 10
        },
        {text: '1. Conformación de las Brigadas', bold: true},
        {
          text:
            `Las Brigadas de Respuesta a Emergencias son grupos de personas organizadas y capacitadas en una o varias actividades para
            la respuesta a emergencias como es combate contra incendio, primeros auxilios, búsqueda y rescate de personas, entre otros;
            los cuales serán responsables de realizarlas de manera preventiva o ante la eventualidad de un alto riesgo, emergencia,
            siniestro o desastre, dentro del ámbito de la empresa, orientada a la salvaguarda de las personas, sus bienes y entorno,
            están organizadas por un coordinador de brigada.
            En función de las situaciones potenciales de emergencia identificas y los requisitos legales aplicables, se conforman las
            siguientes Brigadas de Respuesta a Emergencia:\n\n`,
          fontSize: 10
        },
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            'Brigada de Evaluación, búsqueda y rescate',
            'Primeros auxilios',
            'Brigada de combate de Incendios',
            'Brigada de Comunicación e Información',
            'Brigada de Seguridad, Servicios y Equipamiento'
          ]
        },
        {text: `Las Brigadas, serán multifuncionales con motivo del número de trabajadores que cuenta la empresa, es decir los integrantes de
                las Brigadas podrán actuar en dos o más especialidades.\n\n`, fontSize: 10},
        {text: '2. Características que deben tener los Integrantes de las Brigadas\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
              'Vocación de servicio y actitud dinámica',
              'Tener buena salud física y mental ',
              'Con disposición de colaboración ',
              'Con don de mando y liderazgo ',
              'Con conocimientos previos en la materia ',
              'Con capacidad de toma de decisiones',
              'Con criterio para resolver problemas ',
              'Con responsabilidad, iniciativa, formalidad, aplomo y cordialidad ',
              'El integrante debe estar consciente que esta actividad se hace de manera voluntaria y motivada para el buen desempeño de esta función que es la salvaguarda de la vida de las personas.',
          ]
        },
        {text: '\n3. Colores para la identificación de las Brigadas\n', bold: true},
        {
          table: {
            widths: [170, 100],
            body: [
              [
                {text: 'BRIGADA', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'Color', bold: true, fillColor: '#ddd', alignment: 'center'}
              ],
              [
                  {text: 'Evacuación'},
                  {text: 'Naranja', alignment: 'center'}
              ],
              [
                  {text: 'Primeros Auxilios'},
                  {text: 'Blanco', alignment: 'center'}
              ],
              [
                  {text: 'Combate de Incendios'},
                  {text: 'Rojo', alignment: 'center'}
              ],
              [
                  {text: 'Comunicación'},
                  {text: 'Verde', alignment: 'center'}
              ],
            ]
          },
          margin: [150, 10],
        },
        {text: '4. Funciones de los Coordinadores de las Brigadas\n', bold: true, pageBreak: 'before'},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Coordinar y evaluarla actuación de la brigada en la atención de las emergencias de acuerdo con el plan previamente trazado.`,
            `Planear la organización de la brigada.`,
            `Colaborar en el diseño, redacción, difusión, prueba y actualización de los planes previos de prevención y atención de emergencias.`,
            `Mantener actualizado el inventario del equipo de su grupo.`,
            `Garantizarla disponibilidad y buen estado del equipo de la brigada.`,
            `Controlar que las revisiones y mantenimientos al equipo, sean hechos en la forma y periodicidad recomendados.`,
            `Participar con los coordinadores de otras brigadas en la planeación de los simulacros.`,
          ]
        },
        {text: '\n5. Funciones generales de los integrantes de las Brigadas\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Coadyuvar a la conservación de la calma de los usuarios en caso de emergencia.`,
            `Accionar el equipo de seguridad cuando se requiera.`,
            `Difundir entre la comunidad la cultura de Protección Civil.`,
            `Dar la voz de alarma en caso de presentarse un alto riesgo, emergencia, siniestro o desastre.`,
            `Utilizar sus distintivos siempre que ocurra un alto riesgo, emergencia, siniestro o desastre o la simple posibilidad de esta; así como cuando se realicen simulacros de evacuación.`,
            `Suplir o apoyar a los integrantes de otras Brigadas cuando se requiera.`,
            `Cooperar con los cuerpos de seguridad externos.`,
          ]
        },
        {text: '\n6. Funciones y actividades de la Brigada de Evacuación\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Implementar, colocar y mantener en buen estado la señalización de las instalaciones, Contar con un censo actualizado y permanente del personal.`,
            `Dar la señal de evacuación de las instalaciones.`,
            `Fomentar actitudes y de respuesta tanto en ejercicios de desalojo como en situaciones reales entre la población en general.`,
            `Ser guías y retaguardias en ejercicios de desalojo y eventos reales dirigiendo a los grupos de personas hacia las zonas de menor riesgo y revisando que nadie se quede en su área de competencia.`,
            `Conducir a las personas durante un alto riesgo, emergencia, siniestro o desastre hasta un lugar seguro a través de rutas libres de peligro.`,
            `Verificar de manera constante y permanente que las rutas de evacuación estén libres de obstáculos.`,
            `En el caso de que una situación amerite la evacuación del inmueble y que la ruta de evacuación previamente determinada se encuentre obstruida o represente algún peligro, indicar al personal rutas alternas de evacuación.`,
            `Realizar un censo de personas al llegar al punto de reunión.`,
            `Coordinar el regreso del personal a las instalaciones en caso de simulacro o en caso de una situación diferente a la normal cuando ya no exista peligro.`,
            `Coordinar las acciones de repliegue cuando sea necesario.`,
          ]
        },
        {text: '\n7. Funciones y actividades de la Brigada de Primeros Auxilios\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Contar con un listado de instrumentos del botiquín y llevar a cabo un control de estos.`,
            `Reunir a la Brigada en caso de emergencia en un punto predeterminado, así como la instalación de puesto de socorro necesario para atender el alto riesgo, emergencia, siniestro o desastre.`,
            `Proporcionar los cuidados inmediatos y temporales a las víctimas de un alto riesgo, emergencia, siniestro o desastre, a fin de mantenerlas con vida y evitarles un daño mayor en tanto se recibe la ayuda médica especializada.`,
            `Hacer entrega del lesionado a los cuerpos de auxilio.`,
            `Mantener actualizado, vigente y en buen estado los botiquines.`,
          ]
        },
        {text: '\n8. Funciones y actividades de la Brigada de Combate de Incendios\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Minimizar los daños y pérdidas que puedan presentarse en las instalaciones como consecuencia de una amenaza de incendio, interviniendo con los medios de seguridad con que se disponga.`,
            `Vigilar el mantenimiento del equipo contra incendio.`,
            `Vigilar que no haya sobrecarga de líneas eléctricas, ni que exista acumulación de material inflamable.`,
            `Vigilar que el equipo contra incendios sea de fácil localización y no se encuentre obstruido.`,
            `Conocer el uso de los equipos de extinción de fuego, así como el uso que se le dé, de acuerdo con cada tipo de fuego.`,
            `Las funciones de esta Brigada cesarán cuando arriben el apoyo externo, o deje de ser un conato de incendio.`,
          ]
        },
        {text: '\n9. Funciones de la Brigada de Comunicación\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Contar con un listado de números telefónicos de cuerpos de auxilio de la zona. Mismos que deberá dar a conocer a toda la comunidad.`,
            `Hacer las llamadas a los cuerpos de auxilio, según el alto riesgo, emergencia, siniestro o desastre que se presente.`,
            `En coordinación con la Brigada de Primeros Auxilios tomará nota del número de ambulancia, nombre del responsable, dependencia y el lugar donde será remitido el paciente, y realizará la llamada a los parientes del lesionado.`,
            `Recibir la información de cada Brigada, de acuerdo con el alto riesgo, emergencia, siniestro o desastre que se presente, para informarle al Coordinador General y cuerpos de emergencia.`,
            `Informes a la prensa si el alto riesgo, emergencia, siniestro o desastre lo amerita.`,
            `Realizar campañas de difusión para el personal con el fin de que conozca cuáles son las actividades del Comité, sus integrantes, funciones, actitudes y normas de conducta ante emergencias, en fin, todo lo relacionado a la Protección Civil, para crear una cultura dentro de la empresa.`,
            `Emitir reportes de los resultados de los simulacros para todo el personal, a fin de mantenerlos actualizados e informados en los avances en materia de Protección Civil.`,
          ]
        },
        {text: '\n10. Funciones y actividades de la Brigada de Seguridad, Servicios y Equipamiento\n', bold: true},
        {
          type: 'lower-alpha',
          fontSize: 10,
          ol: [
            `Contar con un listado y mantenerlo vigente del equipo, herramientas, accesorios, equipo de protección
             personal para la atención de una emergencia`,
            `Realizar revisiones periódicas del estado que guardan equipo, herramientas, accesorios, equipo de
             protección personal para la atención de una emergencia, para determinar las acciones a seguir en caso
             de que se encuentre deteriorado.`,
            `Verificar que después de una emergencia el equipo, herramientas, accesorios, equipo de protección
             personal para la atención de una emergencia, vuelva a colocarse en el lugar asignado.`,
            `Dar seguimiento a la reposición de equipo, herramientas, accesorios, equipo de protección personal
             para la atención de una emergencia.`,
            `Emitir reportes de los resultados de los simulacros para todo el personal, a fin de mantenerlos
             actualizados e informados en los avances en materia de Protección Civil.`,
          ]
        },
        {text: '\nLas Brigadas de Respuesta a Emergencia quedan conformadas de la siguiente manera:\n', fontSize: 10},
        {text: 'Brigada de Evacuación', bold: true, pageBreak: 'before'},
        {
          table: {
            widths: [190, 190, 162],
            body: [
              [
                {text: 'Cargo Administrativo', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Cargo dentro de la Estructura', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Firma', bold: true, alignment: 'center', fontSize: 10},
              ],
              [
                {},
                {text: 'Coordinador de la Brigada de Evacuación, Búsqueda y Rescate', alignment: 'center', fontSize: 10},
                {}
              ],
              [
                {},
                {text: 'Brigadiste de Evacuación, búsqueda y rescate', alignment: 'center', fontSize: 10},
                {}
              ],
            ]
          }
        },
        {text: '\n\n'},
        {text: 'Brigada de Primeros Auxilios', bold: true},
        {
          table: {
            widths: [190, 190, 162],
            body: [
              [
                {text: 'Cargo Administrativo', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Cargo dentro de la Estructura', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Firma', bold: true, alignment: 'center', fontSize: 10},
              ],
              [
                {},
                {text: 'Coordinador de la Brigada de Primeros Auxilios', alignment: 'center', fontSize: 10},
                {}
              ],
              [
                {},
                {text: 'Brigadista de Primeros Auxilios', alignment: 'center', fontSize: 10},
                {}
              ],
            ]
          }
        },
        {text: '\n\n'},
        {text: 'Brigada de Combate de incendio', bold: true},
        {
          table: {
                  widths: [190, 190, 162],
                  body: [
                      [
                          {text: 'Cargo Administrativo', bold: true, alignment: 'center', fontSize: 10},
                          {text: 'Cargo dentro de la Estructura', bold: true, alignment: 'center', fontSize: 10},
                          {text: 'Firma', bold: true, alignment: 'center', fontSize: 10},
                      ],
                      [
                          {},
                          {text: 'Coordinador de la Brigada de Combate a incendios', alignment: 'center', fontSize: 10},
                          {}
                      ],
                      [
                          {},
                          {text: 'Brigadista de Combate de incendios', alignment: 'center', fontSize: 10},
                          {}
                      ],
                  ]
              }
        },
        {text: '\n\n'},
        {text: 'Brigada de Comunicación', bold: true},
        {
          table: {
            widths: [190, 190, 162],
            body: [
              [
                {text: 'Cargo Administrativo', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Cargo dentro de la Estructura', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Firma', bold: true, alignment: 'center', fontSize: 10},
              ],
              [
                {},
                {text: 'Coordinador de la Brigada de Comunicación e Información', alignment: 'center', fontSize: 10},
                {}
              ],
            ]
          }
        },
        {text: '\n\n'},
        {text: 'Brigada de Seguridad, Servicios y Equipamiento', bold: true},
        {
          table: {
            widths: [190, 190, 162],
            body: [
              [
                {text: 'Cargo Administrativo', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Cargo dentro de la Estructura', bold: true, alignment: 'center', fontSize: 10},
                {text: 'Firma', bold: true, alignment: 'center', fontSize: 10},
              ],
              [
                {},
                {text: 'Coordinador de la Brigada de Seguridad, Servicios y Equipamiento', alignment: 'center', fontSize: 10},
                {}
              ],
              [
                {},
                {text: 'Brigadista de Seguridad, Servicios y Equipamiento', alignment: 'center', fontSize: 10},
                {}
              ],
            ]
          }
        },
        {text: '\n\n\n\n'},
        {
          table: {
            widths: [270, 270],
            body: [
              [
                {
                  // image: `${firmaEstacion}`,
                  // fit: [100, 50],
                  // alignment: 'center',
                  // border: [true, true, true, false],
                  // pageBreak: 'before'
                },
                {
                  text: '',
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false],
                  pageBreak: 'before'
                }
              ],
              [
                {
                  text: `REVISADO POR:\n Nombre \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true, false, true, true]
                },
                {text: 'NOMBRE\nREPRESENTANTE LEGAL', alignment: 'center', fontSize: 8}
              ]
            ]
          },
          layout: 'noBorders'
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Acta de Conformación');
  }
}
