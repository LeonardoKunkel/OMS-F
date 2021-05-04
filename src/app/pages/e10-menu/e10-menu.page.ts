import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e10-menu',
  templateUrl: './e10-menu.page.html',
  styleUrls: ['./e10-menu.page.scss'],
})
export class E10MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private pdfMaker: PdfMakerService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goProcedure() {
    this.navCtrl.navigateForward('/e10-menu/e10-procedimiento');
  }

  pdfPCP01() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2015', fontSize: 9},
                {text: 'CLAVE: P-CP-01', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'PROCEDIMIENTO ESPECÍFICO',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'ADMINISTRACIÓN DE CAMBIOS DE PERSONAL',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 10],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '5.   Desarrollo..........................................................................................................................................', bold: true},
                {text: '5'}
              ],
              [
                {
                  text: '5.1   Personal involucrado en los Aspectos ambientales y Riesgos asociados al proceso.................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '5.2   Selección de personal.................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '5.2.1   Cobertura de personal...........................................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '5'}
              ],
              [
                {
                  text: '5.2.2   Evaluación del personal sustituto.........................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '6'}
              ],
              [
                {
                  text: '5.3   Personal de nuevo ingreso..........................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '5.3.1   Inducción...............................................................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '6'}
              ],
              [
                {
                  text: '5.3.2   Capacitación y entrenamiento...............................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '6'}
              ],
              [
                {
                  text: '5.4   Reintegración por ausencia prolongada......................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '7'}
              ],
              [
                {text: '6.   Registros...........................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '7.   Referencias.......................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '8.   Control de cambios...........................................................................................................................', bold: true},
                {text: '7'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '\n'},
        {
          text: [
            {text: '1. Objetivo.\n', bold: true},
            `Establecer los criterios y lineamientos para realizar la administración de cambios de personal
            para garantizar que se mantengan los niveles de conocimiento técnico, habilidades y
            experiencia obligatorios del personal, con el propósito de identificar y controlar oportunamente
            los riesgos asociados que se puedan introducir al realizar este tipo de cambios y que puedan
            ser causa de incidentes, para no afectar la operación, el mantenimiento, la seguridad y al medio
            ambiente.`
          ]
        },
        {text: '\n'},
        {
          text: [
            {text: '2. Alcance.\n', bold: true},
            {text: '2.1 El presente procedimiento establece los criterios para realizar la administración de cambios de personal en la Estación de Servicio, para asegurar la competencia del personal en los siguientes casos:\n'},
            {text: 'a. Personal de nuevo ingreso.\nb. Cobertura temporal por ausencia( vacaiones, incapacidad).\nc. Cobertura definitiva.\nd. Reintegración después de una ausencia prolongada.'}
          ]
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Asignar recursos para la capacitación.',
            'Seleccionar al personal para cobertura del Encargado de la Estación de Servicio.',
            'Autorizar la capacitación del personal de nuevo ingreso.'
          ],
          marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Realizar a detección de necesidades de capacitación.',
            'Apoyar en la definición de los perfiles de puesto del personal.',
            'Supervisar el cumplimiento del programa de capacitación del personal.',
            'Realizar evaluaciones del personal de la estación de servicio.',
            'Supervisar los cambios de personal.',
            'Resguardar los expedientes del entrenamiento y los resultados de las pruebas aplicadas al personal, propio y contratado, para evaluar su competencia, conforme a lo indicado en el procedimiento Competencia del Personal, capacitación y entrenamiento, P-SA-06'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones', bold: true},
        {
          text: [
            {text: '4.1 Aspecto Ambiental: ', bold: true},
            'elemento de las actividades,productos o servicios de una organización que puede interactuar con el medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2 Conocimiento técnico: ', bold: true},
            'conjunto de conocimientos que un trabajador ha adquirido por aprendizaje, por la práctica y por la experiencia laboral en la ejecución de determinadas tares.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3 Cambio de personal: ', bold: true},
            'es la sustitución temporal o permanente de un trabajador que tiene asignadas actividades y/o funciones críticas, lo que implica la aplicación de lineamientos sistemáticamente para mantener personal con experiencia y conocimiento actualizado en la tecnología de los procesos de operación, mantenimiento, aspectos ambientales y la seguridad, a fin de proporcionar una base sólida para todas las decisiones que puedan afectar la seguridad de los procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4 Cambio de Tecnología: ', bold: true},
            'son los cambios realizados a la tecnología de proceso documentada y aprobada, incluye: cambios en los riesgos de los materiales, así como cambios en las bases de diseño del equipo, a las bases de diseño del proceso, especificaciones de las condiciones operativas y los sistemas de monitoreo y control del proceso.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5 Cambio Temporal: ', bold: true},
            'sustitución temporal de un trabajador de base por otro en su ausencia, para realizar las labores asignadas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6 Competencia: ', bold: true},
            'conjunto de destrezas habilidades, conocimientos y características conductuales que, correctamente combinadas frente a una situación de trabajo, predicen un desempeño superior, es una capacidad real y demostrada por el trabajador.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7 Entrenamiento: ', bold: true},
            'Procedimiento que se establece para que el individuo obtenga los conocimientos, las habilidades y las capacidades específicas del puesto que va a desempeñar. El entrenamiento debe considerar los riesgos, peligros y aspectos ambientales que tendrán las actividades a desarrollar.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8 Experiencia: ', bold: true},
            'conjunto de conocimientos que un trabajador ha adquirido a partir de realizar alguna actividad laboral en un transcurso de tiempo determinado, que le permite conocer y manejar las desviaciones al proceso.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.9 Factor de Riesgo: ', bold: true},
            ' es la característica o circunstancia detectable en el individuo, que se sabe asociada con un aumento en la probabilidad de padecer, desarrollar o estar especialmente expuesto a que ocurra una lesión o enfermedad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.10 Funciones Críticas: ', bold: true},
            'son aquellas en las que un error humano puede resultar en algún incidente y/o accidente. Son funciones que requieren que las personas que las desempeñan tengan un nivel mínimo de experiencia, conocimientos y habilidades.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.11 Habilidad: ', bold: true},
            'Capacidad que tiene un trabajador para ejecutar una tarea sin dificultad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.12 Inducción: ', bold: true},
            'Procedimiento inicial por medio del cual se proporciona al personal la información básica acerca del proyecto que le permita integrarse rápidamente a su lugar de trabajo.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.13 Perfil del trabajador: ', bold: true},
            'son aquellas características personales (anatómicas, fisiológicas, psicológicas y sociales), de formación (escolaridad, conocimientos, experiencia y habilidades) así como el estado general de salud del trabajador, en relación con la rama de actividad a desempeñar.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.14 Puesto: ', bold: true},
            'conjunto de labores, responsabilidades y condiciones de trabajo, definidas y de carácter impersonal, que ocupa un lugar en una estructura administrativa.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.15 Puesto Crítico: ', bold: true},
            'son aquellos puestos en los que se realizan funciones críticas, y que por un error humano puede resultar algún incidente y/o accidente en las instalaciones de la Estación de Servicio, su efectivo cumplimiento garantiza la seguridad de estas, la preservación del medio ambiente y la integridad de los empleados.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.16 Requisitos del puesto: ', bold: true},
            'son aquellos puestos en los que se realizan funciones críticas, y que por un error humano puede resultar algún incidente y/o accidente en las instalaciones de la Estación de Servicio, su efectivo cumplimiento garantiza la seguridad de estas, la preservación del medio ambiente y la integridad de los empleados.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Desarrollo', bold: true},
        {text: '5.1 Personal involucrado en los Aspectos ambientales y Riesgos asociados al proceso.', bold: true, marginLeft: 13},
        {
          text: `El personal que realiza funciones críticas es debidamente seleccionado para garantizar su
          competencia, por lo tanto, el personal sustituto cumple con el perfil y nivel de conocimientos
          que exige el puesto de trabajo, para evitar desviaciones en la aplicación de los procedimientos de operación mantenimiento y seguridad, en las actividades asignadas. 
          Las categorías del personal que realiza funciones críticas y que está involucrado con los
          riesgos asociados a la operación, el mantenimiento, la seguridad y los aspectos ambientales
          en la ejecución de actividades en cada una de las etapas de recepción, almacenamiento y
          despacho de producto de la estación de servicio son los siguientes:`,
          marginLeft: 23
        },
        {
          ul: [
            'Encargado de la estación de Servicio.',
            'Despachador'
          ],
          marginLeft: 36
        },
        {text: '5.2 Selección del Personal.', bold: true, marginLeft: 13},
        {text: '5.2.1 Cobertura del Personal.', bold: true, marginLeft: 30},
        {text: 'La cobertura del personal por ausencia se lleva a cabo con personal propio de la estación de servicio, o personal externo, invariablemente cumple con lo que señala el procedimiento Competencia del personal, Capacitación y Entrenamiento P-SA-06.', marginLeft: 42},
        {text: '5.2.1.1 Selección del encargado de la Estación de servicio', marginLeft: 58, bold: true},
        {
          text: 'En virtud de que el encargado es responsable de la estación de servicio, éste cuenta con los conocimientos y experiencia en materia de operación, seguridad, mantenimiento y protección ambiental, independientemente de la capacitación y entrenamiento que reciba por parte de la estación de servicio, conforme a la descripción del perfil del puesto FS-14, determinado mediante el procedimiento Competencia del Personal, Capacitación y Entrenamiento PSA-06, en el entendido de que el candidato a sustituir la ausencia del titular será determinado por la Máxima autoridad de la estación de servicio. El candidato o candidatos propuestos para a sustituir al encargado de la estación de servicio presentan Curriculum vitae para demostrar sus conocimientos y experiencia y presentar una entrevista con la Máxima autoridad de la estación de servicio, para que valore sus aptitudes y coteje contra los requerimientos del perfil del puesto de trabajo y determine la procedencia de su aceptación para recibir la capacitación y entrenamiento y posterior evaluación para determinar quien realiza la sustitución temporal o definitiva del titular del puesto.',
          marginLeft: 69
        },
        {text: '5.2.1.2 Cobertura de los Despachadores de producto', marginLeft: 58, bold: true},
        {
          text: 'Los despachadores de producto a vehículos son los que están directamente ligados a la operación, por lo tanto, son los responsables de la aplicación de los procedimientos operativos y planes de respuesta a emergencia, su cobertura está supeditada a la valoración que realice el encargado de la estación de servicio, conforme a los requisitos especificados en el perfil del puesto (FS-14), determinado mediante el procedimiento P-SA-06, Competencia del Personal, Capacitación y Entrenamiento. Los candidatos presentan una entrevista con el Encargado de la estación de servicio para que evalúe sus habilidades, conocimientos y seleccione la mejor opción para realizar la cobertura del personal y autorizar su capacitación y entrenamiento, para posteriormente realizar una evaluación y determinar al candidato que obtenga la mejor calificación.',
          marginLeft: 69
        },
        {text: '5.2.2 Evaluación del Personal sustituto.', bold: true, marginLeft: 30},
        {
          text: 'La cobertura temporal o definitiva de un Encargado de la estación de servicio y Despachador   de producto a vehículos, se requiere la aplicación de una evaluación Teórico - Práctica, por parte del candidato propuesto, cuya calificación mínima aprobatoria será de 8 mínimo, para asegurar su competencia.',
          marginLeft: 42
        },
        {text: '5.3 Personal de nuevo ingreso.', bold: true, marginLeft: 13},
        {text: '5.3.1 Inducción.', bold: true, marginLeft: 30},
        {
          text: 'El personal de nuevo ingreso una vez que ha cumplido con los requisitos contractuales para ser trabajador de la Estación de Servicio requiere pasar por un proceso de inducción antes de incorporarse al puesto de trabajo al que está aspirando, para lo cual es capacitado en los siguientes temas:',
          marginLeft: 42
        },
        {
          type: 'lower-alpha',
          ol: [
            'La política del SASISOPA de la estación de servicio.',
            'Los Objetivos y metas.',
            'Estructura, funciones y responsabilidades.',
            'Inducción a las instalaciones de la Estación de Servicio.',
            'Aspectos ambientales.',
            'Riesgos potenciales.',
            'Reglas generales de trabajo.',
            'Reglas de Seguridad de la instalación.',
            'La organización de la estación de servicio.',
            'El proceso operativo de la estación de servicio.',
            'Las características de los productos se manejan (Hojas HDSS).'
          ],
          marginLeft: 52
        },
        {text: '5.3.2 Capacitación y entrenamiento.', bold: true, marginLeft: 30},
        {
          text: 'En seguimiento de la fase de inducción, el personal de nuevo ingreso se le asigna una etapa de capacitación y entrenamiento en el área de trabajo, en el puesto de despachado, para que conozca y aprenda los procedimientos aplicables en el área y posteriormente una etapa de entrenamiento ejecutando las actividades propias de la categoría bajo la observación de su jefe inmediato y finalmente se le aplica una evaluación teórica y práctica para asegurar su competencia.',
          marginLeft: 52
        },
        {text: '5.4 Reintegración por ausencia prolongada.', bold: true, marginLeft: 13},
        {
          text: 'El Encargado de la estación de servicio determina de acuerdo con el tiempo de ausencia y de las habilidades y tiempo de experiencia del trabajador ausente, si se requiere o no una recapacitación, para mantener su competencia, salvo que durante el tiempo que el trabajador estuvo ausente haya ocurrido alguna revisión de los procedimientos aplicables a sus actividades, algún cambio de tecnología o de normatividad.',
          marginLeft: 22
        },
        {text: '\n'},
        {text: '6. Registros', bold: true},
        {
          text: [
            {text: '6.1 ', bold: true},
            'FS-14, Perfil del puesto de Trabajo.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.2 ', bold: true},
            'Evaluaciones de capacitación de los trabajadores.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '7. Referencias.', bold: true},
        {
          text: [
            {text: '7.1 ', bold: true},
            'P-SA-01, Política'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.2 ', bold: true},
            'P-SA-02, Identificación de peligros y aspectos ambientales, evaluación de riesgos y de impactos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.3 ', bold: true},
            'P-SA-04, Objetivos metas e indicadores.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.4 ', bold: true},
            'P-SA-06, Competencia del personal, capacitación y entrenamiento.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.5 ', bold: true},
            'P-SA-08, Control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.6 ', bold: true},
            'P-SA-10, Control de actividades y de procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.7 ', bold: true},
            'P-SA-13, Preparación y respuesta a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.8 ', bold: true},
            'P-RE-01 Planes de Respuesta a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.9 ', bold: true},
            'Disposiciones administrativas de carácter general que establecen los Lineamientos para  la conformación, implementación y autorización de los Sistemas de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente aplicables a las actividades de Expendio al Público de Gas Natural, Distribución y Expendio al Público de Gas Licuado de Petróleo y de Petrolífero.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '8. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-CP-01');
  }

  pdfPCT01() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2021', fontSize: 9},
                {text: 'CLAVE: P-CT-01', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 10],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '4'}
              ],
              [
                {text: '5.   Aseguramiento de la Calidad............................................................................................................', bold: true},
                {text: '4'}
              ],
              [
                {
                  text: '6.   Desrrollo............................................................................................................................................',
                  bold: true
                },
                {text: '4'}
              ],
              [
                {
                  text: '6.1   Clasificación de cambios.............................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '4'}
              ],
              [
                {
                  text: '6.1.1   Cambios permanentes..........................................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '4'}
              ],
              [
                {
                  text: '6.1.2   Cambios temporales.............................................................................................................',
                  bold: true,
                  marginLeft: 23
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.2   Solicitud de cambio de Tecnología..............................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.3   Definición del cambio..................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.4   Proyecto de cambio.....................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.5   Actualización del análisis de riesgo............................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.6   Identificación de aspectos ambientales......................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.7   Requisitos legales.......................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.8   Ejecución del cambio...................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.9   Prearranque.................................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.10   Inicio de operación....................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.11   Seguimiento y cierre de cambios..............................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '7'}
              ],
              [
                {
                  text: '6.12   Control de cambios de tecnología.............................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '8'}
              ],
              [
                {
                  text: '6.13   Comunicación de cambios........................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '8'}
              ],
              [
                {text: '7.   Registros...........................................................................................................................................', bold: true},
                {text: '8'}
              ],
              [
                {text: '7.   Referencias.......................................................................................................................................', bold: true},
                {text: '9'}
              ],
              [
                {text: '8.   Control de cambios...........................................................................................................................', bold: true},
                {text: '9'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '\n'},
        {text: '1. Objetivo.', bold: true},
        {
          text: `Establecer los criterios y lineamientos para administrar los cambios de Tecnología que se realicen a los procesos e instalaciones de la estación de servicio, para de identificar y controlar los riesgos e impactos ambientales asociados a estas actividades que puedan ser causa de incidentes o accidentes que afecten la integridad de trabajadores, instalaciones, medio ambiente o terceros.`,
          marginLeft: 13
        },
        {text: '\n'},
        {text: '2. Alcance', bold: true},
        {
          text: [
            {text: '2.1 ', bold: true},
            'El alcance aplica para todos los equipos, maquinaria, tuberías, accesorios y sistemas de la Estación de servicio.'
          ],
          marginLeft: 13
        },
        {
          type: 'lower-alpha',
          ol: [
            'Sustitución de equipos (bombas, despensarios), tuberías, dispositivos y accesorios, por otros de características diferentes.',
            'Cambios de capacidad de almacenamiento o despacho de producto.',
            'Cambios de especificaciones de materiales de construcción de equipos y componentes.',
            'Empleo de nuevas sustancias químicas peligrosas, o cambios de especificaciones de los productos inflamables y combustibles y de las sustancias químicas en general.',
            'Cambios en los procedimientos de operación, de mantenimiento y de inspección.',
            'Cambio de la presión de ajuste de válvulas de relevo de presión.',
            'Cambio de servicio de maquinaria y equipo.',
            'Empleo de maquinaria o equipo clasificado como provisional.',
            'Cualquier alteración a la instalación que afecte a los componentes de esta.'
          ],
          marginLeft: 23
        },
        {
          text: [
            {text: '2.3 ', bold: true},
            'No es aplicable al reemplazo equivalente de circuitos, equipos, tuberías, sistemas, accesorios, refacciones, sustancias químicas, dispositivos, productos, etc., por otros de las mismas características.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Proporcionar los recursos necesarios para realizar   los cambios de Tecnología.',
            'Realizar el estudio costo-beneficio para determinar la aplicación del cambio de Tecnología.',
            'Realizar los cambios necesarios para cumplir con la normatividad.'
          ],
          marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
              'Elaborar la solicitud de cambio de Tecnología para mejoras de la operación, o para atender alguna necesidad específica o corregir una condición de riesgo o controlar o eliminar un aspecto ambiental para minimizar el impacto ambiental.',
              'Realizar la Administración de Cambios de Tecnología.'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones', bold: true},
        {
          text: [
            {text: '4.1 Administrador de cambios: ', bold: true},
            ' Es el responsable de administrar los cambios que se realicen en la estación de servicio, lo cual corresponde al Encargado de la estación de Servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2 Administración del cambio: ', bold: true},
            'Es la aplicación sistemática de políticas, prácticas y  procedimientos de la organización en las tareas de identificación, evaluación, autorización e instalación de cualquier tipo de cambio efectuado en las operaciones, procesos o equipo y que puedan alterar, modificar o afectar la seguridad de estos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3 Análisis de riesgo de proceso: ', bold: true},
            ' Trabajo organizado aplicando un método específico para identificar, evaluar y controlar los riesgos significativos asociados con el proceso.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4 Cambio: ', bold: true},
            'Son las modificaciones que se llevan a cabo en los procesos o que están relacionadas con: tecnología, organización, procedimientos, e instalaciones, éstas pueden ser temporales o permanentes.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5 Cambio Temporal: ', bold: true},
            'Son los cambios que tienen un periodo de operación predeterminado, al término del cual se retorna a las condiciones originales o de diseño.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6 Especificaciones de diseño: ', bold: true},
            'Son documentos del Marco Normativo que se cumplen al realizar una actividad o al adquirir un bien o un servicio, se incluyen las leyes y regulaciones, las especificaciones de diseño, las normas y estándares.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7 Maquinaria y equipo: ', bold: true},
            'Es el conjunto de mecanismos y elementos combinados destinados a recibir una forma de energía, para transformarla a una función determinada. Este concepto incluye: los equipos estáticos y dinámicos (tanques, bombas, compresor), las tuberías en general; los accesorios y dispositivos de tanques y dispensarios, los sistemas de drenaje, las estructuras, la obra civil en general y los circuitos eléctricos, entre otros, que conforman las instalaciones de la estación de servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8 Revisión de seguridad de pre-arranque: ', bold: true},
            'Es el conjunto de actividades que se realizan para comprobar que un equipo o instalación puede iniciar sus operaciones en condiciones seguras.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Aseguramiento de la Calidad', bold: true},
        {
          text: [
            {text: '5.1', bold: true},
            'El Representante Técnico se asegura de que el diseño y las especificaciones de todos los cambios que se realicen la maquinaria y equipo, accesorios, refacciones, tuberías, dispositivos de tanques y dispensarios  nuevas instalaciones cumplan con los reglamentos, normas, códigos y buenas prácticas de ingeniería reconocidas y aceptadas, consideradas en la Norma Oficial Mexicana NOM-005-AEA-2016.El nivel mínimo de calidad aceptable para los equipos y materiales y accesorios nuevos son los indicados en dicha norma, por lo tanto la sustitución de equipos, sistemas, tuberías, accesorios, elementos, refacciones siempre será por otro que cumpla con la citada  norma. (procedimientos mejores prácticas y estándares, P-SA-09).'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '6. Desarrollo', bold: true},
        {text: '6.1 Clasificación de cambios.', bold: true, marginLeft: 13},
        {text: '6.1.1 Cambios permanentes.', bold: true, marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Los cambios permanentes modifican de manera definitiva el proceso o instalación.'
          ],
          marginLeft: 60
        },
        {text: '6.1.2 Cambios temporales.', bold: true, marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Los cambios temporales tienen un periodo de operación preestablecido, al término del cual se retiran y retornan a las condiciones originales.',
            'Los cambios temporales y su periodo de operación deben estar plenamente justificados, se establece desde su proyecto la fecha en la que se deben retirar y retornar a las condiciones originales.',
            'Se debe llevar un control estricto de los cambios temporales.'
          ],
          marginLeft: 60
        },
        {text: '6.2 Solicitud de cambio de Tecnología.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.2.1', bold: true},
            'El cambio de Tecnología se puede realizar por las siguientes condiciones:'
          ],
          marginLeft: 30
        },
        {
          type: 'lower-alpha',
          ol: [
            'Mejoras en el proceso operativo.',
            'Beneficios en los controles.',
            'Mejoras en la seguridad industrial.',
            'Mejoras en la protección ambiental.',
            'Por alcanzar una tecnologíade punta.',
            'Por cambios en la Normatividad.',
            'Mejoras en la economía'
          ],
          marginLeft: 60
        },
        {text: '6.3 Definición del cambio.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.3.1', bold: true},
            'El Encargado de la Estación de servicio incorpora la propuesta de cambio y elabora el expediente correspondiente.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.3.2', bold: true},
            'La máxima autoridad y el Encargado de la instalación analizan la propuesta de cambio presentada y determina si cumple con la definición de cambio, para proceder a iniciar el Proyecto de Cambio, para presentarla a la Máxima Autoridad del Centro de Trabajo.'
          ],
          marginLeft: 30
        },
        {text: '6.4 Proyecto de Cambio.', bold: true, marginLeft: 13},
        {text: 'El proyecto consiste en identificar las acciones que se realizan con motivo del cambio solicitado considerando el alcance mínimo siguiente:', marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Datos generales del cambio de Tecnología.',
            'Descripción del Cambio de Tecnología.',
            'Justificación Técnica económica.',
            'Diagrama esquematizado del cambio de Tecnología.',
            'Análisis de riesgo de proceso.',
            'Necesidades de adecuación de estructura organizacional.',
            'Capacitación y entrenamiento del personal.',
            'Actualización de la Tecnología del Proceso.',
            'Actualización de manuales de operación.',
            'Actualización o elaboración procedimientos; de operación, mantenimiento, inspección, entre otros.',
            'Actualización de planes y programas de operación, mantenimiento, seguridad y protección ambiental.'
          ],
          marginLeft: 60
        },
        {text: '6.5 Actualización del análisis de riesgo.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.5.1', bold: true},
            'Siempre que se proyecte realizar un cambio, se practica previamente un análisis de riesgo de proceso con el propósito de identificar los riesgos asociados al mismo e implementar las acciones para su prevención o control y las acciones resultantes del estudio se atienden antes de autorizar el inicio de operación del proceso o de la instalación modificada, conforme al procedimiento P-SA-02, y si es necesario se actualiza la matriz de riesgos potenciales, FS-09.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.5.2', bold: true},
            'Se estiman los tiempos requeridos para la ejecución de las actividades contenidas en el “Proyecto de cambio” y elaboran los programas de trabajo correspondientes.'
          ],
          marginLeft: 30
        },
        {text: '6.6 Identificación de aspectos ambientales', bold: true, marginLeft: 13},
        {text: 'El Representante Técnico realiza el análisis del cambio para identificar si existen aspectos ambientales significativos que ameriten medidas de control de impactos ambientales asociados al cambio de e tecnología, conforme al procedimiento P-SA-02, si es necesario se actualiza la matriz de aspectos ambientales.', marginLeft: 30},
        {text: '6.7 Requisitos legales', bold: true, marginLeft: 13},
        {text: 'El representante Técnico identifica si existen requisitos legales, conforme al procedimiento P-SA-03, impacten el cambio de tecnología y define que actividades, trámites o acciones se tienen que realizar para dar cumplimiento.', marginLeft: 13},
        {text: '6.8 Ejecución del cambio.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.8.1', bold: true},
            'Durante la ejecución, se verifica el cumplimiento de lo dispuesto en los programas de trabajo, en las especificaciones del proyecto y en caso de contrato de obra, servicio o adquisición, éste debe apegarse a las especificaciones técnicas, contenidas en el proyecto de Cambio de Tecnología.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.8.2', bold: true},
            'En caso de identificar desviaciones durante la ejecución del cambio, se elaboran los reportes de campo correspondientes, solicitando las correcciones pertinentes y dando seguimiento a las desviaciones reportadas hasta su atención definitiva.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.8.3', bold: true},
            'Se mantienen los registros que proporcionen evidencia de que la ejecución del proyecto de cambio cumplió con lo dispuesto en las especificaciones del proyecto y en el contrato de obra, servicio o adquisición, como: reportes de campo, minutas de trabajo, fotografías, gráficas y estudios especiales, entre otros.'
          ],
          marginLeft: 30
        },
        {text: '6.9 Prearranque.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.9.1', bold: true},
            'Al concluir las etapas de construcción, inspección y pruebas relacionadas con el cambio y antes de autorizar su inicio de operación, el grupo de trabajo realiza una revisión de seguridad pre-arranque.'
          ],
          marginLeft: 30
        },
        {text: '6.10 Inicio de operación.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.10.1', bold: true},
            'La Máxima autoridad de la Estación de servicio, el encargado de la estación de servicio, apoyándose con el instalador del cambio revisan y validan los registros relacionados con la revisión de seguridad de pre-arranque, de acuerdo con los requisitos que el  proveedor o fabricante establezca.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.10.2', bold: true},
            'Una vez aprobada la revisión de seguridad de pre-arranque, la Máxima Autoridad autoriza el inicio de operaciones de la planta o proceso donde se aplicó la administración del cambio.'
          ],
          marginLeft: 30
        },
        {text: '6.11 Seguimiento y cierre de cambios.', bold: true, marginLeft: 13},
        {text: '6.11.1 Cambios temporales.', bold: true, marginLeft: 30},
        {
          text: [
            {text: '6.11.1.1   ', bold: true},
            'Todo aquel equipo o instalación donde se haya efectuado un cambio de Tecnología, considerado como temporal se considera crítico; por lo tanto, durante el periodo de temporalidad se implementan acciones que garanticen la integridad de trabajadores, instalaciones, medio ambiente y terceros.'
          ],
          marginLeft: 60
        },
        {
          text: [
            {text: '6.11.1.2   ', bold: true},
            'Para solicitar el retiro de los cambios temporales, la Máxima autoridad de la estación de servicio verifica que toda la documentación modificada por este motivo incluida en el “Proyecto del cambio”, se retorne a las condiciones originales; tales como, procedimientos operativos e instrucciones de trabajo, información de tecnología del proceso, planes y programas en general.'
          ],
          marginLeft: 60
        },
        {text: '6.11.2 Cierre del cambio temporal.', bold: true, marginLeft: 30},
        {
          text: [
            {text: '6.11.2.1   ', bold: true},
            'Se establece cerrado el cambio temporal, cuando se verifique que el retorno a las condiciones operativas originales ha sido restablecido, así como, la información de tecnología del proceso y demás documentación modificada han sido restablecidas a su condición original, se elabora una “acta de cierre del cambio” y comunicar al personal involucrado la información relativa al cierre del cambio, o al retiro de los cambios temporales y la vuelta a la normalidad.'
          ],
          marginLeft: 60
        },
        {text: '6.11.3 Cambios permanentes.', bold: true, marginLeft: 30},
        {
          text: [
            {text: '6.11.3.1   ', bold: true},
            'Al iniciarse la operación del proceso o de la maquinaria, equipo a que fue sometido a un cambio, se verifica que el cambio realizado reporte los beneficios esperados en la operación, mantenimiento, seguridad, salud, higiene, protección ambiental, calidad o bien, que resuelve la problemática que lo originó. Para esta verificación se realizan las mediciones, pruebas y demás actividades que se consideren procedentes.'
          ],
          marginLeft: 60
        },
        {
          text: [
            {text: '6.11.3.2   ', bold: true},
            'En caso de que el cambio no reporte los beneficios esperados o no resuelva la problemática que lo originó se realiza un análisis para identificar las causas de dicha desviación y proponer las acciones que correspondan, elaborando el informe respectivo.'
          ],
          marginLeft: 60
        },
        {
          text: [
            {text: '6.11.3.3   ', bold: true},
            'Verificado el cumplimiento de los beneficios esperados o resuelta la problemática que originó el cambio, se elabora un “acta de cierre del cambio” que respalde dicha verificación y que indique que los requerimientos de la presente guía fueron cumplidos satisfactoriamente.'
          ],
          marginLeft: 60
        },
        {text: '6.11.4 Cierre de cambios permanentes.', bold: true, marginLeft: 30},
        {
          text: [
            {text: '6.11.4.1   ', bold: true},
            'Se establece cerrado el cambio permanente, cuando se atiendan totalmente las actividades descritas en el proyecto de cambio, se realice la revisión de seguridad prearranque y se verifique el logro de los beneficios esperados o la correcta atención de la problemática que lo originó.'
          ],
          marginLeft: 60
        },
        {text: '6.12 Control de cambios de tecnología.', bold: true, marginLeft: 13},
        {text: 'El Encargado de la estación de servicio elabora y mantiene actualizada la información siguiente:', marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Censo de cambios realizados y en ejecución.',
            'Un expediente individual para cada uno de los cambios realizados o en etapa de realización.',
            'La información de tecnología del proceso que se actualizó con motivo de un cambio, como: diagramas en general, planos, manuales de operación y hojas de diseño de equipos, entre otras, se incorpora a los expedientes o archivos correspondientes, de manera que en éstos siempre se mantenga la información actualizada.',
            'Se elaboran y resguardan los registros que proporcionen evidencia de que se realizó la revisión de seguridad de prearranque, como: reportes de campo, minutas de trabajo, listas de verificación, fotografías, gráficas y estudios especiales, entre otros.',
            'Se mantienen los registros relacionados con la autorización del inicio de operación de los equipos, o instalaciones en los que se haya efectuado un cambio de Tecnología.',
            'Se elaboran los registros que evidencien la atención de las acciones relacionadas con el seguimiento y cierre de cambios temporales.',
            'Los cambios de tecnología se documentan con el formato FS-19.'
          ],
          marginLeft: 60
        },
        {text: '6.13 Comunicación de cambios.', bold: true, marginLeft: 13},
        {text: 'Todos los cambios temporales o definitivos se comunican a todo el personal de la estación de servicio, indicando los aspectos ambientales, los riegos y las nuevas condiciones de operación, medidas de seguridad y controles, de ser el caso los nuevos procedimientos, conforme al procedimiento, Comunicación, participación y consulta, PSA-07.', marginLeft: 30},
        {text: '\n'},
        {text: '7. Registros.', bold: true},
        {
          text: [
            {text: '7.1 ', bold: true},
            'FS-08, Matriz de aspectos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.2 ', bold: true},
            'FS-09, Matriz de riesgos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.3 ', bold: true},
            'FS-19, Control de cambios.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.4 ', bold: true},
            'Expediente que integre tosa la documentación del cambio de tecnología'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '8. Referencias.', bold: true},
        {
          text: [
            {text: '8.1 ', bold: true},
            'P-SA-02, Identificación de aspectos ambientales y de peligros y evaluación de riesgos e impactos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.2 ', bold: true},
            'P-SA-03, Requisitos legales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.3 ', bold: true},
            'P-SA-07, Comunicación participación y consulta.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.4 ', bold: true},
            'P-SA-08, Control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.5 ', bold: true},
            'P-SA-09, Mejores prácticas y estándares.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.6 ', bold: true},
            'P-SA-10, Control de actividades y procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.7 ', bold: true},
            'P-SA-13, Preparación y respuesta a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.8 ', bold: true},
            'NOM-05-ASEA-2016, Diseño construcción, operación y mantenimiento, de estaciones de servicio, para almacenamiento y expendio diésel y gasolinas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.9 ', bold: true},
            'NOM-005-STPS-1998, Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.10 ', bold: true},
            ' Disposiciones administrativas de carácter general que establecen los Lineamientos para la conformación, implementación y autorización de los Sistemas de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente aplicables a las actividades de Expendio al Público de Gas Natural, Distribución y Expendio al Público de Gas Licuado de Petróleo y de Petrolíferos.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '9. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-CT-01');
  }

  pdfPOP01() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2021', fontSize: 9},
                {text: 'CLAVE: P-OP-01', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'PROCEDIMIENTO ESPECÍFICO',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'RECEPCIÓN DE AUTOTANQUE Y DESCARGA DE PRODUCTO A TANQUE DE ALMACENAMIENTO',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 15],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.3   Del personal designado para recibir el producto.........................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.4   Del chofer de la compañía que suministra el producto...............................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '4'}
              ],
              [
                {text: '5.   Accesorios y Herramientas...............................................................................................................', bold: true},
                {text: '5'}
              ],
              [
                {text: '6.   Seguridad Industrial..........................................................................................................................', bold: true},
                {text: '5'}
              ],
              [
                {
                  text: '6.1   Seguridad Industrial (Control de Riesgos)...................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.2   Control Aspectos Ambientales....................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '7.   Desrrollo............................................................................................................................................',
                  bold: true
                },
                {text: '8'}
              ],
              [
                {
                  text: '8.   Desviaciones al procedimiento.........................................................................................................',
                  bold: true
                },
                {text: '9'}
              ],
              [
                {
                  text: '8.1   Criterios para no recibir el producto o suspender la descarga....................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '9'}
              ],
              [
                {
                  text: '8.1.1   Condiciones climatológicas..................................................................................................',
                  bold: true,
                  marginLeft: 24
                },
                {text: '9'}
              ],
              [
                {
                  text: '8.1.2   Por diferencias en documento de embarque........................................................................',
                  bold: true,
                  marginLeft: 24
                },
                {text: '9'}
              ],
              [
                {
                  text: '8.1.3   Incidencias en la operación de descarga..............................................................................',
                  bold: true,
                  marginLeft: 24
                },
                {text: '10'}
              ],
              [
                {text: '9.   Registros...........................................................................................................................................', bold: true},
                {text: '10'}
              ],
              [
                {text: '10.   Referencias.....................................................................................................................................', bold: true},
                {text: '10'}
              ],
              [
                {text: '11.   Control de cambios.........................................................................................................................', bold: true},
                {text: '11'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '\n'},
        {text: '1. Objetivo.', bold: true},
        {
          text: `Establecer la secuencia de actividades para realizar el proceso de recepción del autotanque y la descarga de productos inflamables (gasolinas) y combustible (diésel) a tanques de almacenamiento de una forma segura para el personal, medio ambiente e instalaciones, sin alterar especificaciones del producto almacenado.`,
          marginLeft: 13
        },
        {text: '\n'},
        {text: '2. Alcance', bold: true},
        {
          text: 'El presente procedimiento aplica cada vez que se realiza una operación de recibo del autotanque y descarga de productos inflamables y combustibles a tanques de almacenamiento en la estación de servicio, el cual considera actividades compartidas del personal de la estación con el operador del autotanque al de la compañía suministradora del producto.',
          marginLeft: 13
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Proporcionar los recursos necesarios para la aplicación del presente procedimiento.',
            ' Proporcionar la capacitación al personal responsable de recibir el producto por autotanque.'
          ],
          marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Solicitar los recursos necesarios para la aplicación del presente procedimiento.',
            'Asegurarse de que el personal responsable de recibir el producto por autotanque se encuentre debidamente capacitado, que conoce las hojas de seguridad de los productos, los dispositivos de seguridad de la estación de servicio y los del autotanque, y los planes de respuesta a emergencia.',
            'Asegurarse que el personal que opera el autotanque conoce las reglas de seguridad de la estación de servicio y los planes de respuesta a emergencia.',
            'Asegurarse de que las herramientas y accesorios para realizar la descarga están completas y en buen estado.',
            'Cumplir con el programa de mantenimiento del sistema de almacenamiento.',
            'Supervisar el cumplimiento del presente procedimiento.'
          ],
          marginLeft: 23
        },
        {text: '3.3 Del personal designado para recibir el producto.', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Participar en la capacitación del presente procedimiento.',
            'Portar el equipo de protección personal.',
            'Cumplir el presente procedimiento.',
            'No realizar o detener la operación de llenado del tanque si existe una condición que comprometa su integridad, la del chofer, la instalación o el medio ambiente.'
          ],
          marginLeft: 23
        },
        {text: '3.4 Del chofer de la compañía que suministra el producto.', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Portar el equipo de protección personal.',
            'Cumplir las reglas de seguridad de la estación de servicio y límites de velocidad.',
            'Cumplir el presente procedimiento.',
            'No realizar la descarga si existe una condición que comprometa la seguridad de las personas, el medio ambiente o las instalaciones.'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones', bold: true},
        {
          text: [
            {text: '4.1 Aspecto Ambiental: ', bold: true},
            'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2 Accesorios de descarga: ', bold: true},
            'Herramientas utilizadas para realizar la operación de llenado del autotanque.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3 Arrestador de flama: ', bold: true},
            'dispositivos de seguridad que se instalan en los tubos de venteo de los tanques de almacenamiento de diésel, para evitar la propagación de fuego del exterior hacia el interior de estos. Su propósito es evitar que se propague el paso de fuego, a la vez permitir el flujo de gases y/o vapores.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4 Biombo: ', bold: true},
            'Lamina sobre un marco de metal, que contiene un señalamiento de comunicación de descarga de producto, el cual se utiliza para delimitar el área de descarga.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5 Calza: ', bold: true},
            'Cuña de madera o de goma que se utiliza para impedir el movimiento del autotanque durante la descarga de productos, cuando se encuentra estacionado.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6 Cable de tierra física: ', bold: true},
            'Cable de cobre adaptado con una pinza caimán en un extremo y el otro está conectado a la red de tierras físicas de la estación de servicio, cuya función es disipar las cargas estáticas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7 Chofer: ', bold: true},
            'conductor del autotanque a él asignado y de la descarga del producto transportado en la estación de servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8 BETX: ', bold: true},
            'Benceno, Tolueno, etilbenceno y Xilenos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.9 Derrame: ', bold: true},
            'Es la falta de contención de productos inflamables o combustibles por sobrellenado de los tanques de almacenamiento, o verter producto en el piso durante la operación de la estación de servicio al desconectar un autotanque en la descarga, durante la carga de producto a vehículos o en el vaciado de líneas o tanques.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.10 Drenaje Aceitoso: ', bold: true},
            'Es el conjunto de tuberías y registros que capta las aguas aceitosas provenientes de las áreas de despacho, almacenamiento y Almacén de Residuos peligrosos, para cruzar por una trampa de combustibles antes de realizar la descarga al drenaje municipal, con el fin de evitar la contaminación.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.11 Documento que ampara el Embarque: ', bold: true},
            'Comprobante oficial expedido por la empresa suministradora del producto, que ampara el traslado y entrega de producto a la estación de servicio, pudiendo ser una factura, Remisión de Producto (RP).'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.12 Equipo crítico: ', bold: true},
            'Sistemas, maquinaria, equipos, instalaciones o componentes, cuya falla pudiera derivar en la liberación de energía o material peligroso, capaz de originar Incidentes y Accidentes, el tanque de almacenamiento es un equipo crítico.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.13 HT: ', bold: true},
            'Hidrocarburos Totales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.14 Rombo de identificación de producto: ', bold: true},
            'Accesorio ubicado en los cuatro lados del Autotanque, mediante el cual se identifica el producto transportado, conforme a los números ONU (1203 para gasolinas, 1202 para Diesel).'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.15 Sellado electrónico: ', bold: true},
            'Sistema de control que permite monitorear la apertura y cierre del domo, válvula de carga y descarga y caja de válvulas, a través de un código de cuatro dígitos generado en forma automática, aleatoria y no repetible.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.16 Sello de garantía: ', bold: true},
            'Dispositivo desechable de plástico, con número de folio, utilizado para garantizar la no apertura de domo y caja de válvulas del autotanque durante el trayecto del centro embarcador a la estación de servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.17 Riesgo: ', bold: true},
            'La probabilidad de ocurrencia de un evento indeseable medido en términos de sus consecuencias en las personas, instalaciones, medio ambiente o la comunidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.18 Válvula de tres vías: ', bold: true},
            'Válvula localizada en la tubería de entrada-salida del tonel del autotanque, opera totalmente abierta o cerrada, se acciona manualmente con un dispositivo remoto que se activa al conectar la manguera de carga o descarga, cuenta con un fusible que actúa cerrando la válvula en caso de incendio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.19 Válvula de tres vías: ', bold: true},
            'dispositivo del autotanque, que al activarlo abre la válvula de venteo, desenergiza el sistema eléctrico y frena el autotanque, se encuentra localizada en la caja de válvulas del autotanque, se acciona cuando se conecta el adaptador de carga a la válvula del autotanque.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.20 Válvula de presión y vacío: ', bold: true},
            'es un dispositivo que se coloca en los tubos de venteo de los tanques de almacenamiento de gasolinas, se utiliza para aliviar la presión o el vacío generado dentro del tanque de almacenamiento derivado o vaciado por el despacho de producto a los vehículos. Los gases dentro del tanque de almacenamiento son expulsados a la atmósfera.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Accesorios y Herramientas.', bold: true},
        {
          text: [
            {text: '5.1', bold: true},
            'Los accesorios y herramientas necesarios para realizar la descarga son los siguientes:'
          ],
          marginLeft: 13
        },
        {
          type: 'lower-alpha',
          ol: [
            'Cubo metálico con conexión a tierra (para toma de muestra).',
            'Codo de descarga.',
            'Manguera de descarga de 4”.',
            'Codo para conexión de manguera de recuperación de vapores.',
            'Manguera de recuperación de vapores.',
            'Biombos de descarga.',
            '2 extintores de 9 kg. de polvo químico seco (PQS) en buen estado y vigentes.',
            'Acoplamiento para toma de muestra de producto.',
            'Calzas para neumáticos para inmovilizar el autotanque (las proporciona el chofer).',
            'Cable de conexión a tierra con pinzas tipo caimán.'
          ],
          marginLeft: 50
        },
        {text: '\n'},
        {text: '6. Seguridad Industrial', bold: true},
        {text: '6.1 Seguridad Industrial (Control de Riesgos).', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.1.1', bold: true},
            'El Control y reducción de riesgos identificados en el procedimiento, P-SA-02 Identificación de peligros y aspectos ambientales y evaluación de riesgos e impactos ambientales, en la operación de Recepción del autotanque y descarga del producto al tanque de almacenamiento, tales como incidentes personales, derrames, fugas, incendios, se realiza conforme se indica en la siguiente tabla:'
          ],
          marginLeft: 28,
          pageBreak: 'after'
        },
        {
          table: {
            widths: [20, 100, 420],
            body: [
              [
                {text: 'No.', bold: true, fillColor: '#ddd'},
                {text: 'Riesgo', bold: true, fillColor: '#ddd'},
                {text: 'Criterio de control', bold: true, fillColor: '#ddd'}
              ],
              [
                {text: '1'},
                {text: 'Derrame o fuga durante la operación de llenado de tanque de almecenamiento.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Cumplir actividades secuenciales del procedimiento P-OP-01.',
                    'No realizar la descarga si hay falta de contención en las conexiones.',
                    'No realizar la descarga si los accesorios se encuentran en mal estado.',
                    'Conexión deficiente en cualquiera o en ambos extremos de las mangueras.',
                    'No realizar la descarga si el tanque no tiene válvula de sobrellenado.',
                    'Conectar la manguera de recuperación de vapores invariablemente.',
                    'Supervisar el llenado del tanque permanentemente.',
                    'Colocar calzas al autotanque.',
                    'Verificar operación de válvula de 3 vías del autotanque.'
                  ]
                }
              ],
              [
                {text: '2'},
                {text: 'Incendio durante el llenado de tanques de almacenamiento.'},
                {
                  ul: [
                    'Prohibición del uso de celular, fumar o encender fuego.',
                    'Prohibición de uso de ropa sintética.',
                    'Instalación eléctrica a prueba de explosión y verificada por una UVIE.',
                    'Mantener la integridad eléctrica de acuerdo con el procedimiento P-IM-03.',
                    'Colocación de 2 extintores de 9 kg de PQS en buen estado y vigentes.',
                    'Activación del Plan de Respuestas a Emergencias.',
                    'Conectar a tierra el autotanque.',
                    'Conectar a tierra el cubo para la toma de muestra.',
                    'Aislar el área de descarga con los biombos.'
                  ]
                }
              ],
              [
                {text: '3'},
                {text: 'Incendio en tubos de venteo durante el llenado del tanque de almacenamiento.'},
                {
                  ul: [
                    'No realizar descarga de producto durante una tormenta eléctrica.',
                    'Mantenimiento a las válvulas de presión- vacío y arrestadores de flama de acuerdo con el procedimiento Mantenimiento a tanques P-IM-02.',
                    'Conectar la manguera de recuperación de vapores durante la descarga, para evitar presionamiento interior del tanque.',
                    'Activación del Plan de respuesta a emergencias.'
                  ]
                }
              ],
              [
                {text: '4'},
                {text: 'Lesión al personal.'},
                {
                  ul: [
                    'Utilizar el equipo de protección personal: ropa de algodón casco de seguridad, guantes, lentes de seguridad, calzado tipo industrial.',
                    'Personal capacitado en el procedimiento y en los Planes de respuesta a emergencia.',
                    'El personal debe conocer las hojas de datos de seguridad de los productos.',
                    'El personal debe conocer los dispositivos de seguridad de la estación de servicio y del autotanque.'
                  ]
                }
              ],
              [
                {text: '5'},
                {text: 'Impacto de autotanque son estructuras, vehículos o lesión a personas.'},
                {
                  ul: [
                    'Abanderamiento del autotanque a la entrada y salida.',
                    'Señalamientos (flechas, guarniciones y límites de áreas), mantenidas de acuerdo con el procedimiento mantenimiento a edificios P-IM-04.',
                    'Respetando límites de velocidad.',
                    'Comunicando reglas de seguridad al chofer.'
                  ]
                }
              ],
            ]
          }
        },
        {text: '6.2 Control Aspectos Ambientales.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.2.1', bold: true},
            'El Control y reducción de los Aspectos Ambientales tales como Compuestos Orgánicos Volátiles (HTC, BETX Y hexano) e Hidrocarburos, mismos que se describen en el Listado Identificación de Aspectos Ambientales FS-08, se realiza conforme se indica en la siguiente tabla:'
          ],
          marginLeft: 30
        },
        {
          table: {
            widths: [100, 77, 45, 90, 210],
            body: [
              [
                {text: 'Actividad', bold: true, fillColor: '#ddd'},
                {text: 'Aspecto Ambiental', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'IA', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'Condición de Operación', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'Control', bold: true, fillColor: '#ddd', alignment: 'center'}
              ],
              [
                {text: 'Entrada maniobra de autotanque'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Se abandera el autotanque a la llegada para facilitar entrada y evitar accidentes (impacto a estructuras o vehículos, lesiones a personas).'}
              ],
              [
                {text: 'Toma muestra de producto'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Se utiliza acoplamiento para evitar salpicaduras y derrames.'}
              ],
              [
                {text: 'Conexión de mangueras'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'En cada operación de llenado se verifica que no exista falta de contención y el estado de los accesorios de descarga para evitar derrames.'}
              ],
              [
                {text: 'Descarga de hidrocarburo'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Conectar la manguera de recuperación de vapores durante el llenado del tanque para evitar incremento de presión en el tanque, con la consiguiente apertura de la válvula de presión y vacío.'}
              ],
              [
                {text: 'Derrame durante la descarga'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Emergencia'},
                {text: 'Suspensión inmediata de la descarga y activación del Plan de respuesta a emergencias de ser necesario.'}
              ],
              [
                {text: 'Derrame durante la descarga'},
                {text: 'Infiltración de Hidrocarburo al suelo'},
                {text: 'Suelo'},
                {text: 'Emergencia'},
                {text: 'Mantenimiento del piso impermeable con la aplicación del procedimiento Mantenimiento a edificios P-IM-04. El diseño del piso tiene pendiente del 1% hacia el drenaje aceitoso, NOM-005-ASEA-2016. Aplicación del procedimiento Mantenimiento a drenajes P-IM-05.', pageBreak: 'after'}
              ],
              [
                {text: 'Desconexión de mangueras', rowSpan: 3},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Aplicación del Procedimiento P-OP-01.'}
              ],
              [
                {},
                {text: 'Hidrocarburo goteo al piso'},
                {text: 'Suelo'},
                {text: 'Normal'},
                {text: 'Aplicación del Procedimiento P-OP-01. La desconexión del autotanque se realiza en primera instancia del autotanque para vaciar el contenido de la manguera en el tanque para evitar salpicaduras.'}
              ],
              [
                {},
                {text: 'Hidrocarburo goteo que se lava y se va al drenaje'},
                {text: 'Agua'},
                {text: 'Normal'},
                {text: 'La limpieza de los goteos se canaliza al drenaje aceitoso.'}
              ],
              [
                {text: 'Escurrimiento de autotanque'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Aplicación del Procedimiento P-OP-01.'}
              ],
              [
                {text: 'Salida maniobra de autotanque'},
                {text: 'HTC, BETX Y HEXANO'},
                {text: 'Aire'},
                {text: 'Normal'},
                {text: 'Se abandera el autotanque para facilitar la salida y evitaraccidentes.'}
              ],
            ]
          }
        },
        {text: '\n'},
        {text: '7. Desarrollo.', bold: true},
        {
          table: {
            widths: [100, 450],
            body: [
              [
                {text: 'Responsable', bold: true, fillColor: '#ddd'},
                {text: 'Actividades', bold: true, fillColor: '#ddd', alignment: 'center'}
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Al arribar el autotanque abandera el equipo para que ingrese a las instalaciones de manera segura, dando prioridad.', counter: 7.1}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Entrega al encargado de la estación de servicio el documento que ampara el producto a entregar (Remisión de producto o aviso de ambarque).', counter: 7.2}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Verifica que los datos del documento de embarquesean correctos: clave de estación de servicio, no. de equipo, volumen y capacidad del autotanque.', counter: 7.3},
                    {text: 'Indica al operador del lugar para estacionar el equipo, de acuerdo con el producto a descargar con la correspondiente bocatoma del tanque del almacenamiento.', counter: 7.4}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Se estaciona y apaga el motor del equipo, acciona freno de estacionamiento, apaga circuitos eléctricos, retira llave de encendido y desciende de forma segura y coloca las llaves en la caja de válvulas.', counter: 7.5}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Entrega tirilla del sistema de control de inventarios al operador, en tiempo real, para garantizar el cupo del producto en el tanque de almacenamiento que recibirá el producto.', counter: 7.6},
                    {text: 'Coloca 4 biombos con la leyenda “Descargado combustible”, para proteger el área de descarga.', counter: 7.7},
                    {text: 'Coloca dos extintores de 9 kg de PQS cerca del área de descarga.', counter: 7.8}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Coloca las calzas para inmovilizar al autotanque.', counter: 7.9},
                    {text: 'Coloca el cable de conexión a tierra en la oreja del tonel del autotanque y a la red de tierra física de la estación de servicio.', counter: 7.10}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Coteja el sello de garantía de la caja de válvulas del autotanque se encuentre íntegro y que éste y el sello electrónico coincidan con los de la remisión.', counter: 7.11}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Conecta acoplamiento para toma de muestra y conecta a tierra el recipiente metálico y realiza la toma de muestra con precaución, verifica con el encargado que el producto obtenido corresponde al producto del documento de embarque y a la bocatoma del tanque de almacenamiento.', counter: 7.12}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {text: 'Nota: Si existe alguna desviación al procedimiento indicada en el apartado No. 8 del presente procedimiento no se realizar la descarga.'}
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Abre la bocatoma del tanque de almacenamiento y entrega al operador la mangueras y codos, de descarga y de retorno de vapores.', counter: 7.13},
                    {text: 'Conecta mangueras de descarga y recuperación de vapores del tanque a los codos de descarga respectivamente en la boquilla de llenado y recuperación de vapores.', counter: 7.14}
                  ]
                }
              ],
              [
                {text: 'Personal E.S. y Chofer'},
                {
                  ol: [
                    {text: 'Inician la descarga, verificando el paso continuo de producto a través de la mirilla del codo de descarga y de la mirilla de la válvula de descarga del autotanque, así mismo verifican que no existan fugas de producto por las conexiones.', counter: 7.15},
                    {text: 'Permanecen atentos supervisando toda la descarga, y verificando que la presión de aire del autotanque en ningún momento sea menos de 7 lb/pulg^2 para evitar que se cierren las válvulas por falta de presión de aire.', counter: 7.16}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Una vez que deje de fluir producto a través de la mirilla del codo de descarga, se realiza prueba con la apertura de la válvula de descarga con el recipiente metálico, conectado nuevamente a tierra, para verificar que no hay remanente de producto.', counter: 7.17}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Desconecta la manguera de descarga primero del lado del autotanque levantando la manguera para escurrir el producto hacia el interior del tanque, para evitar derrame de producto al piso.', counter: 7.18},
                    {text: 'Desconecta con precaución los demás accesorios (mangueras de recuperación de vapores, codos, cable de tierra) y retira las calzas.', counter: 7.19},
                    {text: 'Retira el recipiente metálico, los extintores y los biombos, guarda el cable de tierra física y coloca las tapas de las boquillas de llenado y recuperación de vapores, para dejar la salida libre del equipo.', counter: 7.20},
                    {text: 'Obtiene una impresión del sistema de control de inventarios para determinar el volumen del producto descargado.', counter: 7.21}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'Si no hay diferencias en el volumen descargado, sella y firma el documento que ampara el embarque (Remisión o aviso de embarque) y retiene copia, entrega original y copia al operador.', counter: 7.22}
                  ]
                }
              ],
              [
                {text: 'Personal E.S.'},
                {
                  ol: [
                    {text: 'Recibe copia del documento sellado y sube al autotanque se coloca cinturón de seguridad y enciende el motor.', counter: 7.23}
                  ]
                }
              ],
              [
                {text: 'Chofer'},
                {
                  ol: [
                    {text: 'El personal de la estación de servicio abandera al autotanque para que se retire de manera segura de la estación de servicio.', counter: 7.24},
                    {text: 'Avanza con el autotanque y abandona la E.S. con precaución.', counter: 7.25}
                  ]
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {text: '8. Desviaciones al procedimiento.', bold: true},
        {text: 'Cualquier desviación a las actividades secuenciales del procedimiento es motivo para suspenderlo, sin concluir la entrega del producto, y se notifica al Encargado de la estación de servicio para que imparta las instrucciones que correspondan.', marginLeft: 13},
        {text: '8.1 Criterios para no recibir el producto o suspender la descarga.', bold: true, marginLeft: 13},
        {text: '8.1.1 Condiciones climatológicas.', bold: true, marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Está prohibido iniciar la descarga de producto en caso de tormenta eléctrica, o en su defecto suspenderla si se encuentra en proceso la descarga.'
          ],
          marginLeft: 60
        },
        {text: '8.1.2 Por diferencias en documento de embarque:', bold: true, marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'No. de estación de servicio.',
            'El No. de equipo',
            'El volumen facturado con la capacidad del equipo.',
            'El número de sellos (electrónico y de garantía).',
            'El producto de la muestra.',
            'Producto fuera de especificación (sólidos, turbidez, agua).'
          ],
          marginLeft: 60
        },
        {text: '8.1.3 Incidencias en la operación de descarga.', bold: true, marginLeft: 30},
        {
          type: 'lower-alpha',
          ol: [
            'Falta de capacidad de recibo de producto.',
            'Falta de hermeticidad de accesorios de descarga.',
            'Ausencia de válvula de sobrellenado del tanque de almacenamiento.',
            'Activación de paro de emergencia.',
            'Falla en el sistema de control de inventarios.',
            'En caso de incidente personal o industrial (fuga, derrame, incendio).',
            'En caso de fenómeno geológico (sismo) o hidrometeorológico',
            'Falla de energía eléctrica',
            'En caso de emergencia en otra área de la estación de servicio.',
            'No opera la válvula de 3 vías del autotanque.'
          ],
          marginLeft: 60
        },
        {text: '\n'},
        {text: '9. Registros.', bold: true},
        {
          text: [
            {text: '9.1', bold: true},
            'Las operaciones de recibo de producto por autotanque se registran en la bitácora de recepción de autotanque e incidencias de operación, considerando lo siguiente:'
          ],
          marginLeft: 13
        },
        {
          type: 'lower-alpha',
          ol: [
            'Fecha y hora de descarga.',
            'El número del documento oficial que ampara el embarque y prodcuto.',
            'El número de equipo.',
            'Volumen inicial y final del sistema de control de inventarios y la diferencia.',
            'La desviación del volumen embarcado contra el recibido',
            'Nombre y firma de quien recibió el producto.',
            'Incidencias de operación (apartado 8), o (incidentes personales o industriales, si no se recibió el producto indicar la causa), en caso de que no existan incidencias o incidentes anotar en la bitácora: “operación de llenado de tanque sin incidentes que reportar”.'
          ],
          marginLeft: 60
        },
        {
          text: [
            {text: '9.2', bold: true},
            'El documento oficial que ampara el producto (Remisión, factura o aviso de embarque) se entrega al área contable para el registro, control de y archivo correspondiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.3', bold: true},
            'Cualquier documento adicional acordado con el suministrador de producto se genera en los términos que se hayan especificado.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.4', bold: true},
            'El balance de producto se registra en medios electrónicos para evitar errores manuales.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '10. Referencias.', bold: true},
        {
          text: [
            {text: '10.1', bold: true},
            'P-SA-02, Identificación de aspectos ambientales y peligros y evaluación de riesgos e impactos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.2', bold: true},
            'P-SA-06, Competencia del personal, capacitación y entrenamiento.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.3', bold: true},
            'P-SA-07, Comunicación, participación y consulta.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.4', bold: true},
            'P-SA-08, Control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.5', bold: true},
            'P-SA-10, Control de actividades y de procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.6', bold: true},
            'P-SA-11, Integridad mecánica y aseguramiento de la calidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.7', bold: true},
            'P-SA-12, Seguridad de contratistas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.8', bold: true},
            'P-SA-13, Preparación para respuestas a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.9', bold: true},
            'P-CP-01, Administración de cambios de personal.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.10', bold: true},
            'P-PR-01, Planes de respuesta a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.11', bold: true},
            'P-IM-02, Mantenimiento de tanques.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.12', bold: true},
            'P-IM-03, Mantenimiento de instalaciones eléctricas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.13', bold: true},
            'P-IM-04, Mantenimiento de Edificios.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.14', bold: true},
            'P-IM-05, Mantenimiento de drenajes.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.15', bold: true},
            'NOM-005-ASEA-2016, Diseño, construcción, operación y mantenimiento de estaciones de servicio para el expendio de diésel y gasolinas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '10.16', bold: true},
            'NOM-005-STPS-2004, Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '11. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-OP-01')
  }

  pdfPOP02() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2021', fontSize: 9},
                {text: 'CLAVE: P-OP-02', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'PROCEDIMIENTO ESPECÍFICO',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'DESPACHO DE PRODUCTOS INFLAMABLES Y COMBUSTIBLES A VEHÍCULOS',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 15],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.3   De los despachadores.................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '5.   Seguridad Industrial y Aspectos Ambientales...................................................................................', bold: true},
                {text: '4'}
              ],
              [
                {
                  text: '5.1   Seguridad Industrial (Control de Riesgos)...................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '4'}
              ],
              [
                {
                  text: '5.2   Control Aspectos Ambientales....................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.   Desrrollo............................................................................................................................................',
                  bold: true
                },
                {text: '7'}
              ],
              [
                {text: '7.   Registros...........................................................................................................................................', bold: true},
                {text: '8'}
              ],
              [
                {text: '8.   Referencias.....................................................................................................................................', bold: true},
                {text: '8'}
              ],
              [
                {text: '9.   Control de cambios.........................................................................................................................', bold: true},
                {text: '8'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '1. Objetivo.', bold: true},
        {
          text: `Establecer la secuencia de actividades para realizar proceso de suministro de productos inflamables y combustibles a vehículos automotores, a través de dispensarios, de una forma segura, para evitar daños a las personas, vehículos o instalaciones y medio ambiente.`,
          marginLeft: 13
        },
        {text: '\n'},
        {text: '2. Alcance', bold: true},
        {
          text: 'Este procedimiento aplica cada vez que se realice una operación de despacho de producto a vehículos automotores en la estación de servicio, por medio de dispensarios.',
          marginLeft: 13
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Proporcionar los recursos para la aplicación del presente procedimiento.',
            'Proporcionar la capacitación al personal responsable de realizar el despacho de producto a vehículos automotores.'
          ],
        marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Solicitar los recursos necesarios para la aplicación del presente procedimiento.',
            'Asegurarse de que el personal responsable de realizar el despacho de producto a vehículos se encuentre debidamente capacitado, que conoce las hojas de seguridad de los productos, los dispositivos de seguridad del área de despacho y los planes de respuesta a emergencia.',
            'Asegurarse de que el dispensario y sus componentes se encuentren en buen estado.',
            'Cumplir con el programa de mantenimiento del sistema de despacho.',
            'Supervisar el cumplimiento del presente procedimiento.'
          ],
          marginLeft: 23
        },
        {text: '3.3 De los despachadores', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Participar en la capacitación del presente procedimiento.',
            'Portar el equipo de protección personal.',
            'Cumplir cabalmente el presente procedimiento.',
            'Mantener la seguridad en el área.',
            'Evitar derrames en el área.',
            'Realizar inspección diaria de dispensarios, P-IM-01.'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones:', bold: true},
        {
          text: [
            {text: '4.1   Aspecto Ambiental: ', bold: true},
            'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2   BETX: ', bold: true},
            'Benceno, Tolueno, etilbenceno y Xilenos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3   Despachador: ', bold: true},
            'Personal encargado de la estación de servicio cuya función es suministrar productos inflamables y combustibles a los vehículos automotores a través de los dispensarios.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4   Destorcedor: ', bold: true},
            'Accesorio giratorio instalado en la maguera y boquilla de despacho, para facilitar la manipulación de la manguera.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5   Dispensario: ', bold: true},
            'equipo surtidor de producto, compuesto por un gabinete con display, y accesorios tales como: válvulas shut-off, sensores, medidor volumétrico, tarjetas electrónicas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6   Equipo Crítico: ', bold: true},
            'Sistemas, maquinaria, equipos, instalaciones o componentes, cuya falla pudiera derivar en la liberación de energía o material peligroso, capaz de originar Incidentes y Accidentes, el Dispensario es un equipo crítico.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7   Impacto Ambiental: ', bold: true},
            'Cualquier cambio en el medio ambiente, ya sea adverso o beneficioso, como resultado total o parcial de los aspectos ambientales de una organización.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8   HT: ', bold: true},
            'Hidrocarburos totales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.9   Medidor: ', bold: true},
            'instrumento utilizado para realizar la medición del volumen de producto suministrado a los vehículos automotores.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.10   Paro de emergencia: ', bold: true},
            'Dispositivo de seguridad el cual se activa en caso de una emergencia, para suspender el despacho de combustible del dispensario.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.11   Pistola: ', bold: true},
            'boquilla automática para suministro de producto a los vehículos, la cual se cierra al momento de alcanzar el nivel de llenado del vehículo automotor. Esto se hace con un segundo tubo, el "tubo de detección", que discurre a lo largo del interior del tubo de la boquilla hasta una Bomba Venturi en el mango de la bomba. Una válvula mecánica conectada a una membrana sensora detecta este cambio de presión y dispara el gatillo de la bomba, impidiendo el flujo de combustible.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.12   Protector: ', bold: true},
            'protección colocada al frente de los dispensarios, consistente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.13   Riesgo: ', bold: true},
            'La probabilidad de ocurrencia de un evento indeseable medido en términos de sus consecuencias en las personas, instalaciones, medio ambiente o la comunidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.14   Válvula Shut-off: ', bold: true},
            'en válvula  de corte rápido, la cual al recibir un golpe se rompe intencionalmente y se cerrara automáticamente, cuenta con un fusible de plomo el cual en caso de incendio se derrite y permite el cierre de la válvula.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.15   Válvula Break-away: ', bold: true},
            'válvula de corte rápido para emergencia, la cual al recibir un fuerte tirón se divide en dos partes y cerrándose automáticamente en ambos lados evitando derrame de producto, reduce los riesgos de incendio.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Seguridad Industrial y Aspectos Ambientales.', bold: true},
        {text: '5.1 Seguridad Industrial (Control de riesgos).', bold: true, marginLeft: 13},
        {text: 'La identificación y control de los Aspectos Ambientales y de los Riesgos en el proceso de despacho de productos inflamables y combustibles a vehículos automotores, se describe en el procedimiento del sistema Identificación de Peligros y Aspectos Ambientales, Análisis de Riesgo y Evaluación de Impactos Ambientales, P-SA-02.', marginLeft: 32},
        {text: '5.1.1   Control de Riesgos', bold: true, marginLeft: 30},
        {text: 'El Control y reducción de riesgos tales como incidentes personales, derrames, fugas, incendios, mismos que se describen en el Listado Identificación de Riesgos FS-09 se realiza conforme se indica en la siguiente tabla de Riesgos Identificados: Aunado a los mecanismos de control que contiene la tabla se considera y aplicar  las medidas de seguridad citadas en los apartados 6.1.2 al 6.1.12.', marginLeft: 60, pageBreak: 'after'},
        {
          table: {
            widths: [16, 160, 360],
            body: [
              [
                {text: 'No', bold: true, fillColor: '#ddd'},
                {text: 'Riesgo Identificado', bold: true, fillColor: '#ddd', alignment: 'center'},
                {text: 'Mecanismo de Control', bold: true, fillColor: '#ddd', alignment: 'center'}
              ],
              [
                {text: '1', alignment: 'center'},
                {text: 'Derrame de producto o fuga durante el despacho de producto a vehículos.', alignment: 'center'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Aplicación del procedimiento P-OP-02.',
                    'Cumplimiento del programa de mantenimiento de dispensarios.',
                    'Cumplimiento del procedimiento P-IM-01 Mantenimiento a Dispensarios.',
                    'Prueba de funcionamiento de válvula shut-off, paro de emergencia y pistolas de despacho de acuerdo con el procedimiento P-IM-01.',
                    'No se debe despachar producto cuando exista falta de contención en los accesorios, o mangueras del dispensario.'
                  ]
                }
              ],
              [
                {text: '2', alignment: 'center'},
                {text: 'Derrame por desprendimiento de manguera de despacho de  combustible porque el vehículo se desplaza.', alignment: 'center'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Aplicación del procedimiento P-OP-02.',
                    'El despachador debe retirar inmediatamente la pistola cuando se suspenda la carga en automático.',
                    'No despachar producto a vehículos con motor encendido.'
                  ]
                }
              ],
              [
                {text: '3', alignment: 'center'},
                {text: 'Derrame por derribo del dispensario y no opera la válvula shutoff.', alignment: 'center'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Activar paro de emergencia.',
                    'Activar Plan de Respuesta a Emergencias.',
                    'Realizar pruebas de funcionamiento a las válvulas shut-off, P-IM-01.',
                    'Realizar pruebas de funcionamiento a los paros de emergencia. P-IM-03.'
                  ]
                }
              ],
              [
                {text: '4', alignment: 'center'},
                {text: 'Incendio en el área de despacho por derribo de dispensario o desprendimiento de manguera.', alignment: 'center'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Eliminar fuentes de ignición en el área de despacho, teléfono celular, fumar, encender fuego..',
                    'Está Prohibido pasar corriente entre vehículos en el área de despacho.',
                    'Cumplir programa de mantenimiento a instalaciones eléctricas.',
                    'Obtener dictamen de instalaciones eléctricas por una UVIE.'
                  ]
                }
              ],
              [
                {text: '5', alignment: 'center'},
                {text: 'Incendio en área de despacho provocado por vandalismo.', alignment: 'center'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Capacitar al personal en los Planes de Respuesta a Emergencias P-RE-01.',
                    'Activar Planes de Respuesta a emergencias.',
                    'Realizar simulacros de vandalismo.'
                  ]
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {
          text: [
            {text: '5.1.2', bold: true},
            'El equipo de protección personal a utilizar es ropa de algodón y calzado industrial.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.3', bold: true},
            'El despachador debe conocer las hojas de Datos de seguridad de las gasolinas Regular, Pemex Premium y Pemex diésel.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.4', bold: true},
            'El despachador debe conocer la operación de los dispensarios y los dispositivos de seguridad que se cuentan en la zona de despacho de productos inflamables y combustibles a vehículos automotores.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.5', bold: true},
            'No debe existir ninguna fuente de ignición en el área de despacho tales como: fumar, encender fuego, utilizar equipos de telefonía celular.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.6', bold: true},
            'No se debe suministrar producto a vehículos con el motor encendido.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.7', bold: true},
            'Por ningún motivo se debe suministrar producto a vehículos de transporte de público con pasaje a bordo.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.8', bold: true},
            'No se debe suministrar producto a vehículos cuando exista falta de contención en cualquier accesorio del dispensario, el cual se debe sacar de operación y bloquearse con la válvula de cierre que se encuentra dentro del dispensario y se debe reportar inmediatamente al encargado para su reparación o sustitución.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.9', bold: true},
            'Están prohibidas las reparaciones a vehículos en la zona de despacho de producto, en caso de descompostura debe empujarse fuera de la zona de despacho, a un lugar que no obstruya la circulación.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.10', bold: true},
            'Cada isla de despacho debe contar con un extintor de 9 kg. de PQS.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.11', bold: true},
            'Se deben verificar mensualmente la operación de las válvulas shut-off, sensores y paros de emergencia, atendiendo cualquier falla que resulte de las pruebas, de acuerdo con el procedimiento de Mantenimiento a Dispensarios P-IM-01.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.12', bold: true},
            'Se debe mantener el área limpia tanto dispensarios, accesorios y pisos.'
          ],
          marginLeft: 30
        },
        {text: '\n'},
        {text: '5.2 Control de aspectos ambientales', bold: true, marginLeft: 13},
        {
          text: [
            {text: '5.2.1', bold: true},
            ' Los Aspectos Ambientales de las actividades que pueden interactuar con el medio ambiente durante el proceso de despacho de producto a vehículos automotores, de acuerdo con el procedimiento P-SA-02, que se integran al formato FS-08, son los siguientes:'
          ],
          marginLeft: 30
        },
        {
          type: 'lower-alpha',
          ol: [
            'compuestos orgánicos volátiles (HT, BTEX, hexano).',
            'Hidrocarburos',
            'Lodos aceitosos',
            'Recipientes impregnados de lubricante y aditivo.'
          ]
        },
        {text: 'El criterio de control de los aspectos ambientales y la reducción de riesgos se describen en la siguiente tabla:', marginLeft: 30, pageBreak: 'after'},
        {
          table: {
              widths: [80, 80, 60, 80, 220],
            body: [
              [
                {text: 'Actividad', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'Elemento', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'IA', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'Condición de Operación', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'Control', bold: true, alignment: 'center', fillColor: '#ddd'}
              ],
              [
                {text: 'Colocación de la pistola en el vehículo.'},
                {text: 'Hidrocarburo goteo y se lava y se va al drenaje.'},
                {text: 'Agua.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Aplicación del procedimiento de mantenimiento a dispensarios P-IM-01.',
                    'Cumplimiento del Programa de mantenimiento a dispensarios.',
                    'Prueba de paro en automático de pistolas cada 30 días.',
                    'Direccionamiento del agua de limpieza a drenaje aceitoso.'
                  ]
                }
              ],
              [
                {text: 'Carga de hidrocarburo.'},
                {text: 'HT, BTEX, hexano.'},
                {text: 'Aire.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Se debe implementar la Recuperación de vapores.'
                  ]
                }
              ],
              [
                {text: 'Término del despacho y retiro de pistola del vehículo.'},
                {text: 'Hidrocarburo goteo y se  lava y se va al drenaja.'},
                {text: 'Agua y suelo.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Direccionar el agua de la limpieza al drenaje aceitoso.',
                    'Piso impermeable con pendiente hacia drenaje aceitoso y reparación de grietas o fisuras.'
                  ]
                }
              ],
              [
                {text: 'Limpieza de dispensarios e islas.'},
                {text: 'Consumo de agua.'},
                {text: 'Agua.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Direccionar el agua de la limpieza al drenaje aceistoso y limpieza cada 3 meses de drenaje y trampa separadora.'
                  ]
                }
              ],
              [
                {text: 'Suministro de lubricantes, aditivos.'},
                {text: 'Envases y estopa o franela impregnados de aceite o aditivos.'},
                {text: 'Residuos peligrosos.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Colocación de recipientes en contenedores metálicos con tapa y herméticos, etiquetados y colocarlos en el almacén de residuos peligrosos y retiro cada 3 meses para disposición final.'
                  ]
                }
              ],
              [
                {text: 'Limpieza de contenedores.'},
                {text: 'Generación de aguas contaminadas y trapos impregnados con hidrocarburos.'},
                {text: 'Residuos peligrosos.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Direccionar el agua de la limpieza al drenaje aceitoso.',
                    'Colocación de residuos peligrosos en recipientes metálicos con tapay herméticos y etiqueta, colocados en el almacén de residuos peligrosos y retro cada 3 meses para disposición final.'
                  ]
                }
              ],
              [
                {text: 'Cambio de filtros.'},
                {text: 'Filtros impregnados de hidrocarburo.'},
                {text: 'Residuos peligrosos.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Colocación en recipientes metálicos con tapa y herméticos y con su etiqueta, colocarlos en el almacén de residuos peligrosos y retro cada 3 meses para disposición final.'
                  ]
                }
              ],
              [
                {text: 'Cambio de mangueras, conexiones o pistolas.'},
                {text: 'HT, BTEX, hexano.'},
                {text: 'Aire.'},
                {text: 'Normal.'},
                {
                  type: 'lower-alpha',
                  ol: [
                    'Aplicación de procedimientos: Etiqueta, candadeo y Bloqueo para interrupción de líneas con producto, P-TS-02 y permisos de trabajo peligroso P-TS-06.'
                  ]
                }
              ],
            ]
          }
        },
        {text: '\n'},
        {text: '6. Desarrollo.', bold: true},
        {
          table: {
            widths: [150, 300],
            body: [
              [
                {text: 'Responsable', bold: true, alignment: 'center'},
                {text: 'Actividades', bold: true, alignment: 'center'}
              ],
              [
                {text: 'Usuario Despachador'},
                {
                  ol: [
                    {text: 'Estaciona su vehículo en el área de despacho y apaga el motor.', counter: 6.1},
                    {text: 'Pregunta al usuario el tipo de producto, volumen o monto de producto que desea adquirir.', counter: 6.2},
                    {text: 'Retira la pistola de despacho del dispensario, borra el registro de la última carga y deja en ceros el display del dispensario, indicando al cliente que verifique que efectivamente marca ceros el display.', counter: 6.3},
                    {text: 'Programa el monto o volumen a cargar.', counter: 6.4},
                    {text: 'Abre la tapa del compartimiento y retirar el tapón del tanque de combustible.', counter: 6.5},
                    {text: 'Introduce la pistola en la ocatoma del tanque e iniciar la carga', counter: 6.6},
                    {text: 'Al término de la carga, retirar inmediatamente la pistola, para evitar que el vehículo se mueva con la manguera conectada y la desprenda.', counter: 6.7},
                    {text: 'Colocar la pistola en el dispensario y colocar tapón del tanque de combustible, asegurando el cierre correcto del mismo.', counter: 6.8},
                    {text: 'Realizar el cobro correspondiente de acuerdo con la forma de pago del cliente.', counter: 6.9}
                  ]
                }
              ],
              [
                {text: 'Usuario'},
                {
                  ol: [
                    {text: 'Se retira con su vehículo de la estación de servicio.', counter: 6.10}
                  ]
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {text: '7. Registros.', bold: true},
        {
          text: [
            {text: '7.1', bold: true},
            'El control de los volúmenes despachados por cada dispensario se realiza de forma electrónica, para efectos fiscales y de balance de producto.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.2', bold: true},
            'Las incidencias de operación se registran en bitácora de operación, en caso de que no ocurran eventos importantes, se deben registrar en bitácora: “operación de despacho de combustibles sin incidencias que manifestar”.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '8. Referencias.', bold: true},
        {
          text: [
            {text: '8.1', bold: true},
            'P-SA-02, Identificación de aspectos ambientales, peligros y evaluación de riesgos y aspectos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.2', bold: true},
            'P-SA-06, Competencia del personal, capacitación y entrenamiento.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.3', bold: true},
            'P-SA-07, Comunicación, participación y consulta.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.4', bold: true},
            'P-SA-08, Control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.5', bold: true},
            'P-SA-10, Control de actividades y de procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.6', bold: true},
            'P-SA-11, Integridad mecánica y aseguramiento de la calidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.7', bold: true},
            'P-SA-12, Seguridad de contratistas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.8', bold: true},
            'P-SA-13, Preparación para respuestas a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.9', bold: true},
            'P-CP-01, Administración de cambios de personal.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.10', bold: true},
            'P-PR-01, Planes de respuesta a emergencias.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.11', bold: true},
            'P-IM-01, Mantenimiento a dispensarios.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.12', bold: true},
            'P-IM-03, Mantenimiento a instalaciones eléctricas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.13', bold: true},
            'P-IM-04, Mantenimiento a Edificios.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.14', bold: true},
            'P-IM-05, Mantenimiento a drenajes.'
          ],
          marginLeft: 13
        },
        {
            text: [
              {text: '8.15', bold: true},
              'NOM-005-ASEA-2016, Diseño, construcción, operación y mantenimiento de estaciones de servicio para el expendio de diésel y gasolinas.'
            ],
            marginLeft: 13
        },
        {
          text: [
            {text: '8.16', bold: true},
            'NOM-005-STPS-2004, Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '9. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-OP-02')
  }

  pdfPTS01() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2021', fontSize: 9},
                {text: 'CLAVE: P-TS-01', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'PROCEDIMIENTO ESPECÍFICO',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'ETIQUETADO, CANDADEO Y BLOQUEO PARA INTERRUPCIÓN DE LÍNEAS ELÉCTRICAS',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 15],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.3   Del Responsable de la ejecucción del trabajo.............................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '5.   Herramientas.....................................................................................................................................', bold: true},
                {text: '5'}
              ],
              [
                {text: '6.   Seguridad Industrial y Aspectos Ambientales...................................................................................', bold: true},
                {text: '5'}
              ],
              [
                {
                  text: '6.1   Seguridad Industrial (Control de Riesgos)...................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '5'}
              ],
              [
                {
                  text: '6.2   Aspectos Ambientales.................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '7.   Desarrollo............................................................................................................................................',
                  bold: true
                },
                {text: '6'}
              ],
              [
                {text: '8.   Registros...........................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '9.   Referencias.....................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '10.   Control de cambios.........................................................................................................................', bold: true},
                {text: '7'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '1. Objetivo.', bold: true},
        {
          text: `Establecer los requisitos de seguridad que deben ser cumplidos para aislar, etiquetar, bloquear y candadear, equipos e instalaciones eléctricas, para ejecutar trabajos de mantenimiento de instalaciones eléctricas o equipo dinámico, para salvaguardar la integridad física del personal e instalaciones y medio ambiente por la liberación inesperada de fuentes de energía.`,
          marginLeft: 13
        },
        {text: '\n'},
        {text: '2. Alcance', bold: true},
        {
          text: 'Las disposiciones contenidas en el presente procedimiento son de aplicación obligatoria en la Estación de Servicio para la ejecución de trabajos que se requieran a las instalaciones eléctricas, o para el aislamiento de equipos, para evitar su operación o activación, que pueda producir daño a las personas, instalaciones, equipo y medio ambiente.',
          marginLeft: 13
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Proporcionar los recursos necesarios para ejecutar trabajos de mantenimiento en instalaciones eléctricas o equipo eléctrico.',
            'Proporcionar recursos para que el personal ejecutor se capacite.'
          ],
          marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Asegurarse de que el personal ejecutor esta capacitado, si es interno o que el personal contratista cumpla los requisitos del procedimiento Seguridad de Contratistas P-SA-12.',
            'Vigilar el cumplimiento de las actividades y requisitos de seguridad establecidos en el presente procedimiento.',
            'Aplicar el procedimiento Permiso de Trabajos Peligrosos P-TS-06.',
            'Planear los trabajos de mantenimiento que involucren instalaciones eléctricas y equipos eléctricos.'
          ],
          marginLeft: 23
        },
        {text: '3.3 Del responsable de la ejecución del trabajo', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Apegarse a las políticas de seguridad de la estación de servicio.',
            'Garantizar que el personal ejecutor está debidamente capacitado en la ejecución del trabajo para el cual está contratado.',
            'Participar en la Planeación del Trabajo y en la identificación y aplicación de medidas de seguridad.'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones:', bold: true},
        {
          text: [
            {text: '4.1   Aislante eléctrico: ', bold: true},
            'material de baja conductividad eléctrica que puede ser tomado como no conductor o aislador.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2   Aspecto Ambiental: ', bold: true},
            'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3   Arco eléctrico: ', bold: true},
            'haz luminoso producido por el flujo de corriente eléctrica a través de un medio aislante, que produce radiación y gases calientes.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4   Barreras de seguridad: ', bold: true},
            'Conos, cinta, cercas provisionales o barandales desmontables, empleados para delimitar áreas de acceso restringido por la presencia de riesgos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5   Bloqueo: ', bold: true},
            'instalación de un dispositivo de bloqueo en un equipo de control de energía para garantizar que tanto éste como el equipo controlado no puedan ser operados, iniciados o energizados hasta que el dispositivo sea removido.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6   Candados de Seguridad y Etiquetas: ', bold: true},
            'dispositivos de seguridad requeridos para bloquear y etiquetar únicamente equipos de control de energías peligrosas, energía con el fin de indicar que está bloqueado intencionalmente y que no puede ser operado, iniciado o energizado hasta que sean removidos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7   Condición insegura: ', bold: true},
            'Condición en el equipo o instalación, que puede tener el potencial de ocasionar una lesión, enfermedad, contaminar el medio ambiente o dañar las instalaciones.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8   Derrame: ', bold: true},
            'es la falta de contención de productos inflamables o combustibles por sobrellenado de los tanques de almacenamiento, o verter producto en el piso durante la operación de la estación de servicio al desconectar un autotanque en la descarga, durante la carga de producto a vehículos o en el vaciado de líneas o tanques.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.9   Desenergizado: ', bold: true},
            'Dejar sin energía totalmente uno o más conductores de corriente eléctrica.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.10   Distancia de seguridad: ', bold: true},
            'distancia mínima alrededor de un equipo eléctrico o de conductores energizados, necesaria para garantizar que no habrá accidente por acercamiento de personas, animales estructuras, edificaciones o de otros equipos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.11   Electrocución: ', bold: true},
            'paso de corriente eléctrica a través del cuerpo humano, cuya consecuencia puede llegar hasta la muerte.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.12   Fuente de energía: ', bold: true},
            'es cualquier fuente de electricidad, fuerza mecánica, hidráulica o térmica, o de cualquier tipo que tenga el potencial de desencadenar un evento, una lesión, un derrame, un incendio o explosión.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.13   Instalación eléctrica: ', bold: true},
            'conjunto de aparatos eléctricos, conductores y circuitos asociados para un fin particular (alumbrado, alimentación de equipos, canalizaciones, tableros eléctricos).'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.14   Fuente de energía: ', bold: true},
            'es cualquier fuente de electricidad, fuerza mecánica, hidráulica o térmica, o de cualquier tipo que tenga el potencial de desencadenar un evento, una lesión, un derrame, un incendio o explosión.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.15   Responsable ejecutor del trabajo: ', bold: true},
            'Persona que tiene a su cargo la coordinación de las actividades del personal ejecutante, es persona capaz de identificar peligros, en el sitio donde se realizan trabajos de operación y mantenimiento del sistema eléctrico relacionados con la operación de la Estación de servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.16   Riesgo: ', bold: true},
            'La probabilidad de ocurrencia de un evento indeseable medido en términos de sus consecuencias en las personas, instalaciones, medio ambiente o la comunidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.17   Trabajos Críticos', bold: true},
            'Son aquellas tareas o labores que en la práctica han provocado o que potencialmente pueden ocasionar accidentes, con afectación ya sea al personal, a las instalaciones, al medio ambiente o a terceros. Los trabajos en líneas eléctricas o equipo eléctrico son Trabajos críticos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.18   Trabajo peligroso: ', bold: true},
            'Es un trabajo de mantenimiento peligrosos en los cuales se intervienen, instalaciones eléctricas, instalaciones hidráulicas (productos), se realizan en alturas mayores a 1.5 m o se ejecutan en el interior de áreas confinadas, en los cuales pueda haber una liberación de energía, mediante el cual se especifican las medidas de seguridad que se aplican en la ejecución segura del trabajo. Invariablemente son autorizados por escrito por el encargado de la Estación de Servicio.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Herramientas.', bold: true},
        {text: 'Etiquetas, candados, barreras de seguridad, voltímetro.', marginLeft: 13},
        {text: '\n'},
        {text: '6. Seguridad Industrial y Aspectos Ambientales.', bold: true},
        {text: '6.1 Seguridad Industrial (control de riesgos).', bold: true, marginLeft: 13},
        {text: 'El control de los riesgos en la ejecución de trabajos de mantenimiento (electrocución, liberación inesperada de energía o producto) que involucren la aplicación de etiqueta, candadeo y bloqueo para la interrupción de líneas eléctricas se realiza aplicando las actividades descritas en el apartado de Desarrollo del presente procedimiento, así como la observación de los siguientes requisitos de seguridad:', marginLeft: 32},
        {
          text: [
            {text: '6.1.1', bold: true},
            'El personal que ejecutor de trabajos en instalaciones eléctricas debe estar capacitado en el presente procedimiento, si el personal es externo debe cumplir con lo dispuesto en el procedimiento P-SA-12 Seguridad de Contratistas.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.2', bold: true},
            'El equipo de protección personal a utilizar es: Ropa de algodón, calzado industrial dieléctrico, casco, arnés, lentes de seguridad y guantes dieléctricos.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.3', bold: true},
            'No se debe intervenir ningún equipo o accesorio, antes de verificar que se encuentre completamente aislado.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.4', bold: true},
            'Está estrictamente prohibido retirar los bloqueos por personal no autorizado.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.5', bold: true},
            'Está prohibido tomar atajos para ahorrar tiempo para realizar el trabajo.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.6', bold: true},
            'Ninguna persona debe intentar iniciar o energizar un equipo o máquina que se encuentre debidamente bloqueado y etiquetado.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.7', bold: true},
            'El personal responsable de la Estación de servicio y el personal ejecutor del trabajo deben cerciorarse de que se colocaron correctamente los bloqueos, etiquetas y candados en los accesorios indicados en el permiso de trabajo peligroso.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.8', bold: true},
            'Para trabajos en las bocatomas de tanques de almacenamiento deben delimitarse el área en un radio de 3.10 m. y para el caso de dispensarios en un radio de 6.10 m.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.9', bold: true},
            'El personal ejecutor del trabajo debe contar con el equipo de protección personal específico antes de iniciar el trabajo.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.10', bold: true},
            'El encargado de la estación de servicio es el responsable del resguardo de los candados y etiquetas, para su uso cuando se requiera.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.1.11', bold: true},
            'En caso de derrame durante la ejecución de los trabajos, se deben aplicar las siguientes medidas de seguridad, de acuerdo con el Plan de Respuesta a emergencias, P-RE-01:'
          ],
          marginLeft: 32
        },
        {
          type: 'lower-alpha',
          ol: [
            'Suspender inmediatamente los trabajos de mantenimiento que se estén realizando.',
            'Suspender el suministro de energía eléctrica a los equipos que originaron el derrame.',
            'Activar el sistema de paro por emergencia de la instalación.',
            'Eliminar todas las fuentes de calor o que produzcan ignición (chispas, flama abierta, etc.), que estén cercanas al área del derrame.',
            'Evacuar al personal ajeno a la instalación.',
            'Corregir el origen del derrame.'
          ],
          marginLeft: 60
        },
        {text: '6.2 Aspectos Ambientales.', bold: true, marginLeft: 13},
        {
          text: [
            {text: '6.2.1', bold: true},
            'El control de los aspectos ambientales identificados en el procedimiento Identificación de Peligros y Aspectos Ambientales, Análisis de Riesgo y Evaluación de Impactos Ambientales, P-SA-02, se realiza cumpliendo las actividades descritas en el apartado Desarrollo del presente procedimiento, conjuntamente con la aplicación del procedimiento de Permiso de Trabajos Peligrosos P-TS-06, en virtud de que se previene la  ocurrencia de derrames, fugas, incendios e impactos al ambiente, en la ejecución del mantenimiento, y se  controla la fuente de energía que en este caso es la eléctrica.'
          ],
          marginLeft: 32
        },
        {
          text: [
            {text: '6.2.2', bold: true},
            'Todos los residuos peligrosos que se generen por la ejecución del trabajo de mantenimiento que se ejecute, se colocan en un recipiente metálico cerrado, identificado con una etiqueta, colocado en el almacén de residuos peligrosos, para que posteriormente se retiren y se les dé disposición final.'
          ],
          marginLeft: 32
        },
        {text: '\n'},
        {text: '7. Desarrollo', bold: true},
        {
          text: [
            {text: '7.1 ', bold: true},
            'Se presenta necesidad de realizar un trabajo de mantenimiento preventivo o correctivo, en instalaciones eléctricas, equipos eléctricos, o equipos y/o accesorios que pueden generar la liberación de energía.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.2 ', bold: true},
            'Se define si el trabajo lo realiza personal propio o externo a la Estación de Servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.3 ', bold: true},
            'El Encargado y el Responsable de la ejecución del trabajo, identifican las herramientas y materiales necesarios para ejecutar el trabajo y programan la ejecución.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.4 ', bold: true},
            'El encargado de la estación de servicio y el coordinador del trabajo analizan las actividades a realizar y  elaboran el permiso de trabajos peligroso (F-09) de acuerdo con el procedimiento de Permiso de Trabajos Peligrosos (P-TS-06), para identificar los riesgos,  seleccionar el equipo de protección personal, para definir los interruptores donde se colocarán los etiqueta y candados, para aislar el circuito eléctrico o equipo donde se va a realizar el trabajo y para establecer las medidas de seguridad que garanticen la seguridad de las personas, instalaciones  y medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.5 ', bold: true},
            'El Encargado y el responsable de la Ejecución del trabajo Identifican en el Diagrama Eléctrico Unifilar los Interruptores donde se va a aislar eléctricamente el equipo o circuito a intervenir, considerando la secuencia para eliminar cargas y evitar la ocurrencia de un arco eléctrico.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.6 ', bold: true},
            'Identificar en el Diagrama Eléctrico Unifilar los puntos donde se realizará la prueba de ausencia de energía y colocación de puesta a tierra, para trabajos en el tablero de control eléctrico o acometida eléctrica.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.7 ', bold: true},
            'Identificar en el tablero eléctrico, los equipos e instalaciones afectadas que debe ponerse fuera de operación y/o bloquearse con candados de seguridad y tarjeta de aviso.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.8 ', bold: true},
            'Se delimita la zona de riesgo mediante barreras de seguridad del área donde se va a ejecutar el trabajo.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.9 ', bold: true},
            'Se coloca un extintor de CO2, cerca del área donde se va a ejecutar el trabajo.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.10 ', bold: true},
            'El Personal Ejecutor verifica la ausencia de energía (voltaje) con el equipo específico de acuerdo con el voltaje. Precaución. Toda instalación eléctrica se considera ENERGIZADA hasta que se realice la comprobación de ausencia de tensión eléctrica desenergizado, mediante equipos o instrumentos de medición destinados para tal efecto y la puesta a tierra efectiva.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.11 ', bold: true},
            'El encargado de la estación de servicio coloca la etiqueta-candado en el interruptor seleccionado de la instalación eléctrica o equipo eléctrico que se determinó aislar.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.12 ', bold: true},
            'El encargado y el responsable de la ejecución del trabajo verifican el cumplimiento de las medidas de seguridad establecidas en el permiso de trabajo peligrosos y si no hay desviaciones, el Encargado autoriza el inicio del trabajo de mantenimiento.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.13 ', bold: true},
            'El ejecutor procede a realizar el trabajo de mantenimiento correspondiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.14 ', bold: true},
            'Una vez concluido el trabajo, el personal ejecutor de los trabajos y el Encargado de la estación de servicio deben iniciar la secuencia de normalización de los circuitos y equipos eléctricos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.15 ', bold: true},
            'El encargado de la estación de servicio procede a retirar los bloqueos que se colocaron previamente, primeramente, se inicia por el interruptor principal y después los secundarios, realizan prueba de operación del circuito eléctrico, equipo o accesorio que se intervino para asegurar su correcto funcionamiento.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.16 ', bold: true},
            'El personal ejecutor de los trabajos y el Encargado de la estación de servicio deben asegurarse de que la instalación o equipo queda operando en forma normal.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.17 ', bold: true},
            'Se retirar las barreras para la delimitación de área de trabajo y se deja el área limpia.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '8. Registros.', bold: true},
        {
          text: [
            {text: '8.1 ', bold: true},
            'Registro en bitácora del mantenimiento ejecutado.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.2 ', bold: true},
            'Registro de los incidentes o accidentes ocurridos durante la ejecución del trabajo, en caso de que No hayan ocurrido se debe registrar la leyenda “Sin incidentes que reportar”.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.3 ', bold: true},
            'FO-09, permiso de trabajo peligroso.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '9. Referencias.', bold: true},
        {
          text: [
            {text: '9.1 ', bold: true},
            'P-SA-02, Identificación de aspectos ambientales y peligros y evaluación de riesgos e impactos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.2 ', bold: true},
            'P-SA-08, control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.3 ', bold: true},
            'P-SA-10, control de actividades y de procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.4 ', bold: true},
            'P-SA-11, Integridad Mecánica y aseguramiento de la calidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.5 ', bold: true},
            'P-SA-12, Seguridad de contratistas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.6 ', bold: true},
            'P-TS-06, Permiso de trabajos peligrosos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.7 ', bold: true},
            'NOM-005-ASEA-2016, Diseño, construcción, operación y mantenimiento de estaciones de servicio para el expendio de diésel y gasolinas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '9.8 ', bold: true},
            'NOM-005-STPS-2004, Relativa a las condiciones de seguridad e higiene en los centros de trabajo para el manejo, transporte y almacenamiento de sustancias químicas peligrosas.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '10. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-TS-01')
  }
  
  pdfPTS02() {
    const dd = {
      header() {
        return {
          table: {
            widths: [80, 250, 100, 100],
            heights: [10, 10, 10, 10],
            body: [
              [
                {text: '', rowSpan: 4},
                {text: 'Nombre de la Estación', rowSpan: 4},
                {text: 'PL/11303/EXP/ES/2021', fontSize: 9},
                {text: 'CLAVE: P-TS-02', fillColor: '#ddd', bold: true, fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'FECHA DE EMISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'REVISIÓN:', fontSize: 9},
                {text: '01/08/2021', fontSize: 9}
              ],
              [
                {},
                {},
                {text: 'PRÓXIMA REVISIÓN:', fontSize: 9},
                {text: '01/08/2026', fontSize: 9}
              ],
              [
                {
                  text: 'X. CONTROL DE ACTIVIDADES Y DE PROCESOS',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'PROCEDIMIENTO ESPECÍFICO',
                  colSpan: 4,
                  alignment: 'center',
                  fontSize: 11,
                  fillColor: '#ddd',
                  bold: true
                },
                {},
                {},
                {}
              ]
            ]
          },
          margin: [22, 7]
        }
      },
      content: [
        {
          text: 'ETIQUETA, CANDADEO Y BLOQUEO PARA INTERRUPCIÓN DE LÍNEAS CON PRODUCTO',
          bold: true,
          alignment: 'center',
          fontSize: 28,
          margin: [100, 300]
        },
        {
          text: '\n'
        },
        {
          text: 'Contenido',
          fontSize: 17
        },
        {text: '\n'},
        {
          table: {
            widths: [538, 15],
            body: [
              [
                {text: '1.   Objetivo.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '2.   Alcance.............................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '3.   Responsabilidad................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {
                  text: '3.1   De la Dirección.............................................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.2   Del Encargado de la Estación de servicio....................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {
                  text: '3.3   Del responsable de la ejecución de servicio................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '3'}
              ],
              [
                {text: '4.   Definiciones......................................................................................................................................', bold: true},
                {text: '3'}
              ],
              [
                {text: '5.   Seguridad Industrial y Aspectos Ambientales...................................................................................', bold: true},
                {text: '4'}
              ],
              [
                {
                  text: '5.1   Seguridad Industrial (Control de Riesgos)...................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '4'}
              ],
              [
                {
                  text: '5.2   Control Aspectos Ambientales....................................................................................................',
                  bold: true,
                  marginLeft: 12
                },
                {text: '6'}
              ],
              [
                {
                  text: '6.   Desrrollo............................................................................................................................................',
                  bold: true
                },
                {text: '7'}
              ],
              [
                {text: '7.   Registros...........................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '8.   Referencias.....................................................................................................................................', bold: true},
                {text: '7'}
              ],
              [
                {text: '9.   Control de cambios.........................................................................................................................', bold: true},
                {text: '7'}
              ],
            ]
          },
          layout: 'noBorders',
          pageBreak: 'after'
        },
        {text: '1. Objetivo.', bold: true},
        {
          text: `Establecer los requisitos de seguridad que deben ser cumplidos para aislar, etiquetar, bloquear y candadear, equipos dinámicos, tuberías y válvulas para evitar la liberación inesperada de fuentes de energía, o la pérdida de contención de productos inflamables o combustibles, durante la ejecución de trabajos de   en las instalaciones que manejan hidrocarburos, para salvaguardar la integridad física de las personas, de las propias instalaciones y el medio ambiente.`,
          marginLeft: 13
        },
        {text: '\n'},
        {text: '2. Alcance', bold: true},
        {
          text: 'Las disposiciones contenidas en el presente procedimiento son de aplicación obligatoria en la Estación de Servicio para la ejecución de trabajos que requieran la apertura y cierre de tuberías, accesorios y tanques de almacenamiento, que puedan producir pérdida de contención.',
          marginLeft: 13
        },
        {text: '\n'},
        {text: '3. Responsabilidad', bold: true},
        {text: '3.1 De la Dirección', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Proporcionar los recursos necesarios para ejecutar trabajos de mantenimiento que involucren la apertura de equipos, líneas, mangueras o accesorios.',
            'Proporcionar recursos para que el personal ejecutor se capacite.'
          ],
          marginLeft: 23
        },
        {text: '3.2 Del Encargado de la Estación de servicio', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Asegurarse de que el personal ejecutor está capacitado, si es interno o que el personal contratista cumpla los requisitos del procedimiento Seguridad de Contratistas P-SA-12.',
            'Vigilar el cumplimiento de las actividades y requisitos de seguridad establecidos en el presente procedimiento.',
            'Aplicar el procedimiento Permiso de Trabajos Peligrosos P-TS-06.',
            'Planear los trabajos de mantenimiento que involucren instalaciones eléctricas y equipos eléctricos.'
          ],
          marginLeft: 23
        },
        {text: '3.3 Del responsable de la ejecución del Trabajo', bold: true, marginLeft: 13},
        {
          type: 'lower-alpha',
          ol: [
            'Apegarse a las políticas de seguridad de la estación de servicio.',
            'Garantizar que el personal ejecutor está debidamente capacitado en la ejecución del trabajo para el cual está contratado.',
            'Participar en la Planeación del Trabajo y en la identificación y aplicación de medidas de seguridad.'
          ],
          marginLeft: 23
        },
        {text: '\n'},
        {text: '4. Definiciones:', bold: true},
        {
          text: [
            {text: '4.1   Accesorios: ', bold: true},
            'son todos los elementos que están conectados a las tuberías de producto y tanques de almacenamiento, entre los cuales se encuentran: entrada-hombre, codos, TES, tubería flexible, válvulas de esfera, bombas, mangueras, niples, destorcedores, válvulas shut-off, válvulas break-away y pistolas de despacho.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.2   Aislamiento: ', bold: true},
            'Acción de poner fuera de operación un tanque, motobomba, tubería o dispensario, para protegerlo de la liberación de productos inflamables o combustibles, mediante, bloqueo de válvulas, tapones, bridas ciegas o desconexión de mecanismos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.3   Aspecto Ambiental: ', bold: true},
            'Elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.4   Barreras de seguridad: ', bold: true},
            'Conos, cinta, cercas provisionales o barandales desmontables, empleados para delimitar áreas de acceso restringido por la presencia de riesgos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.5   Bloqueo: ', bold: true},
            'Accion de instalar un dispositivo de bloqueo (tarjeta o candado) para aislar un tanque, motobomba, tubería de producto, para controlar las fuentes de energía para garantizar que el equipo controlado no puedan ser operados, iniciados o energizados hasta que el dispositivo sea removido.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.6   Candados de Seguridad y Etiquetas: ', bold: true},
            'dispositivos de seguridad requeridos para bloquear y etiquetar únicamente equipos de control de energías peligrosas, energía con el fin de indicar que está bloqueado intencionalmente y que no puede ser operado, iniciado o energizado hasta que sean removidos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.7   Condición insegura: ', bold: true},
            'Condición en el equipo o instalación, que puede tener el potencial de ocasionar una lesión, enfermedad, contaminar el medio ambiente o dañar las instalaciones.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.8   Derrame: ', bold: true},
            'es la falta de contención de productos inflamables o combustibles por sobrellenado de los tanques de almacenamiento, o verter producto en el piso durante la operación de la estación de servicio al desconectar un autotanque en la descarga, durante la carga de producto a vehículos o en el vaciado de líneas o tanques.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.9   Equipo crítico: ', bold: true},
            'Sistemas, maquinaria, equipos, instalaciones o componentes, cuya falla pudiera derivar en la liberación de energía o material peligroso, capaz de originar Incidentes y Accidentes, las instalaciones eléctricas se consideran equipo crítico.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.10   Fuente de energía: ', bold: true},
            'es cualquier fuente de electricidad, fuerza mecánica, hidráulica o térmica, o de cualquier tipo que tenga el potencial de desencadenar un evento, una lesión, un derrame, un incendio o explosión.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.11   Responsable de ejecución del trabajo: ', bold: true},
            'Persona que tiene a su cargo la coordinación de las actividades del personal ejecutante y así como, de los requerimientos de herramientas y equipos de protección personal, del desarrollo de los trabajos, generalmente es personal de una compañía externa.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.12   Riesgo: ', bold: true},
            'La probabilidad de ocurrencia de un evento indeseable medido en términos de sus consecuencias en las personas, instalaciones, medio ambiente o la comunidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.13   Trabajos Críticos: ', bold: true},
            'Son aquellas tareas o labores que en la práctica han provocado o que potencialmente pueden ocasionar accidentes, con afectación ya sea al personal, a las instalaciones, al medio ambiente o a terceros. La apertura de mangueras, líneas equipos son Trabajos críticos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '4.14   Trabajo peligroso: ', bold: true},
            'Es un trabajo de mantenimiento peligrosos en los cuales se intervienen, instalaciones eléctricas, instalaciones hidráulicas (productos), se realizan en alturas mayores a 1.5 m o se ejecutan en el interior de áreas confinadas, en los cuales pueda haber una liberación de energía, mediante el cual se especifican las medidas de seguridad que se deben aplicar en la ejecución segura del trabajo. Invariablemente deben ser autorizados por escrito por el encargado de la Estación de Servicio.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '5. Seguridad Industrial y Aspectos Ambientales.', bold: true},
        {text: '5.1 Seguridad Industrial (Control de riesgos).', bold: true, marginLeft: 13},
        {text: 'El control de los riesgos en los trabajos de mantenimiento (liberación inesperada de producto o de energía) que involucren la aplicación de etiqueta, candadeo y bloqueo para la interrupción de líneas con producto se realiza aplicando rigurosamente las actividades descritas en el apartado de Desarrollo del presente procedimiento, así como con la observación de los siguientes requisitos de seguridad:', marginLeft: 32},
        {
          text: [
            {text: '5.1.1', bold: true},
            'El personal que ejecutor de trabajos que requieran la apertura de líneas y equipos debe estar capacitado en el presente procedimiento, si el personal es externo debe cumplir con lo dispuesto en el procedimiento P-SA-12 Seguridad de Contratistas.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.2', bold: true},
            'El equipo de protección personal a utilizar es ropa de algodón y calzado industrial.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.3', bold: true},
            'No se debe intervenir ningún equipo o accesorio, antes de verificar que se encuentre completamente aislado.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.4', bold: true},
            'Está estrictamente prohibido retirar los bloqueos por personal no autorizado.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.5', bold: true},
            'Está prohibido tomar atajos para ahorrar tiempo para realizar el trabajo.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.6', bold: true},
            'El personal responsable de la Estación de servicio y el personal ejecutor del trabajo deben cerciorarse de que se colocaron correctamente los bloqueos, etiquetas y candados en los accesorios indicados en el permiso de trabajo peligroso.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.7', bold: true},
            'Para trabajos en bocatomas de tanques de almacenamiento deben colocarse barreras en un radio de 3.10 m y para el caso de dispensarios en un radio de 6.10 m.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.8', bold: true},
            'Antes de realizar trabajos que requieran la apertura de tuberías y accesorios se debe cerciorar que no existan fuentes de ignición.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.9', bold: true},
            'El uso de equipo de telefonía celular está prohibido en el área donde se realiza el trabajo.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.1.10', bold: true},
            'En caso derrame durante el vaciado del tanque y tuberías, se deben aplicar las siguientes medidas de seguridad de acuerdo con el Plan de Respuesta a emergencias (P-RE-01):'
          ],
          marginLeft: 30
        },
        {
          type: 'lower-alpha',
          ol: [
            'Suspender inmediatamente los trabajos de mantenimiento que se estén realizando.',
            'Suspender el suministro de energía eléctrica a los equipos que originaron el derrame.',
            'Activar el sistema de paro por emergencia de la instalación.',
            'Eliminar todas las fuentes de calor o que produzcan ignición (chispas, flama abierta, etc.), que estén cercanas al área del derrame.',
            'Evacuar al personal ajeno a la instalación.',
            'Corregir el origen del derrame.'
          ],
          marginLeft: 60
        },
        {text: '\n'},
        {text: '5.2 Control de aspectos ambientales', bold: true, marginLeft: 13},
        {
          text: [
            {text: '5.2.1', bold: true},
            'El control de los aspectos ambientales identificados en el procedimiento Identificación de Peligros y Aspectos Ambientales, Análisis de Riesgo y Evaluación de Impactos Ambientales, P-SA-02, se realiza cumpliendo las actividades descritas en el apartado Desarrollo del presente procedimiento, conjuntamente con la aplicación del procedimiento de Permiso de Trabajos Peligrosos P-TS-06, en virtud de que se previene la  ocurrencia de derrames, fugas, incendios e impactos al ambiente, en la ejecución del mantenimiento, porque se controla la liberación inesperada de producto.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '5.2.2', bold: true},
            'Todos los residuos peligrosos que se generen por la ejecución de trabajos de mantenimiento que se ejecuten, se colocan en un recipiente metálico cerrado, identificado con una etiqueta que alerte del riesgo de su contenido, y colocado en el almacén de residuos peligrosos, para que posteriormente se retiren y se les dé disposición final.'
          ],
          marginLeft: 30
        },
        {text: '\n'},
        {text: '6. Desarrollo.', bold: true},
        {
          text: [
            {text: '6.1  ', bold: true},
            'Se presenta necesidad de realizar un trabajo de mantenimiento preventivo o correctivo, en cualquiera de los siguientes casos:'
          ],
          marginLeft: 13
        },
        {
          type: 'lower-alpha',
          ol: [
            'Mantenimiento a dispensarios:'
          ],
          marginLeft: 30
        },
        {
          ul: [
            'Reparación de accesorios en dispensarios o sustitución de estos (pistolas, destorcedores, mangueras, válvulas break-away, conectores, válvula, shut-off, coples, tubería flexible, tubería rígida, válvula check).'
          ],
          marginLeft: 60
        },
        {
          type: 'lower-alpha',
          ol: [
            'Mantenimiento a motobombas y accesorios:'
          ],
          marginLeft: 30
        },
        {
          ul: [
            'Reparación o sustitución de motobomba, conector flexible, tubería rígida.'
          ],
          marginLeft: 60
        },
        {
          text: [
            {text: '6.2  ', bold: true},
            'Se define si el trabajo lo realiza personal propio o externo a la Estación de Servicio.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.3  ', bold: true},
            'El Encargado y el responsable de la ejecución del trabajo, identifican las herramientas y materiales necesarios para ejecutar el trabajo y programan la ejecución.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.4  ', bold: true},
            'Se programa el trabajo una vez que se cuente con el equipo de protección personal y las herramientas necesarias para ejecutarlo.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.5  ', bold: true},
            'El Encargado de la estación de servicio y el Responsable de la ejecución del trabajo acuden al área donde se va a ejecutar el trabajo, para analizar las actividades que serán realizadas y elaboran el Permiso de Trabajo peligroso (FO-09) de acuerdo con el procedimiento de Permiso de trabajos Peligrosos (P-TS-06), para identificar los riesgos potenciales, seleccionar el equipo de protección personal, definir las válvulas o accesorios donde se colocarán los etiqueta y candados para aislar el dispensario, bomba o tanque donde se va a realizar el trabajo y para establecer las medidas a seguir que garanticen la seguridad de las personas e instalaciones y medio ambiente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.6  ', bold: true},
            'Se delimita la zona donde se ejecutará el trabajo para restringir el acceso, en un radio de la siguiente forma:'
          ],
          marginLeft: 13
        },
        {
          ul: [
            '6.10 m a partir de cualquier costado de los dispensarios.',
            '3 m a partir de la bomba sumergible.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '6.7  ', bold: true},
            'Se colocan dos extintores de 20 lb de PQS en el área.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.8  ', bold: true},
            'Se suspende el suministro de energía eléctrica del equipo de bombeo y/o despacho de combustibles y se aplica el Procedimiento de Trabajo Seguro de Etiquetado, bloqueo y candadeo para interrupción de líneas eléctricas (P-TS-01).'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.9  ', bold: true},
            'Se colocan porta candado y candado en la válvula de cierre rápido ubicada en la salida de la motobomba correspondiente, y se cierran y bloquean las válvulas de esfera de la misma bomba y/o la correspondiente válvula ubicada en la alimentación del producto del dispensario que se va a intervenir.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.10  ', bold: true},
            'Se verifica que no existan fuentes de ignición y que el área se encuentre limpia.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.11  ', bold: true},
            'El encargado de la Estación de servicio ratifica con el Responsable de la ejecución del trabajo que se cumplen las medidas de seguridad establecidas en el Permiso de Trabajo y procede a autorizar al ejecutor del trabajo, el inicio de las actividades de mantenimiento, firmando mancomunadamente dicho permiso.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.12  ', bold: true},
            'El ejecutor del trabajo realiza el trabajo de mantenimiento correspondiente en dispensario o contenedor de la bomba del tanque, según corresponda.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.13  ', bold: true},
            'Una vez concluido el trabajo, se procede a retirar los bloqueos que se colocaron previamente, se alinean las válvulas, se verifica que no existan pérdidas de contención de producto, la bomba o dispensario opere correctamente.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '6.14  ', bold: true},
            'El personal ejecutor del trabajo y el Encargado de la estación de servicio realizan prueba de operación del equipo o accesorio y se aseguran de que la instalación o equipo queda operando en forma normal, se retiran barreras de seguridad.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '7. Registros.', bold: true},
        {
          text: [
            {text: '7.1 ', bold: true},
            'Debe registrarse en bitácora de mantenimiento la ejecución del trabajo indicando:'
          ],
          marginLeft: 13
        },
        {
          type: 'lower-alpha',
          ol: [
            'Fecha y hora de inicio y término del trabajo.',
            'No. de permiso de trabajo peligroso.',
            'Responsable de la actividad.',
            'Medidas adicionales de seguridad aplicadas.'
          ],
          marginLeft: 30
        },
        {
          text: [
            {text: '7.2 ', bold: true},
            'Deben registrarse en bitácora los incidentes o accidentes ocurridos, No hayan ocurrido se debe registrar la leyenda “Sin incidentes que reportar”.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '7.3 ', bold: true},
            'FS-09, Permiso de trabajo peligroso.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '8. Referencias.', bold: true},
        {
          text: [
            {text: '8.1 ', bold: true},
            'P-SA-02, Identificación de aspectos ambientales, peligros y evaluación de riesgos y aspectos ambientales.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.2 ', bold: true},
            'P-SA-08, control de documentos y registros.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.3 ', bold: true},
            'P-SA-10, control de actividades y de procesos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.4 ', bold: true},
            'P-SA-11, Integridad Mecánica y aseguramiento de la calidad.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.5 ', bold: true},
            'P-SA-12, Seguridad de contratistas.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.6 ', bold: true},
            'P-TS-06, Permiso de trabajos peligrosos.'
          ],
          marginLeft: 13
        },
        {
          text: [
            {text: '8.7 ', bold: true},
            'NOM-005-ASEA-2016, Diseño, construcción, operación y mantenimiento de estaciones de servicio para el expendio de diésel y gasolinas.'
          ],
          marginLeft: 13
        },
        {text: '\n'},
        {text: '9. Control de cambios.', bold: true},
        {
          table: {
            widths: [50, 50, 400],
            heights: [15, 15],
            body: [
              [
                {text: 'No. de Revisión'},
                {text: 'Fecha de Revisión'},
                {text: 'Concepto o parte del documento que ha sido modificado sobre la anterior revisión.'}
              ],
              [
                {},
                {},
                {}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    }
    this.pdfMaker.generate(dd, 'P-TS-02')
  }
}
