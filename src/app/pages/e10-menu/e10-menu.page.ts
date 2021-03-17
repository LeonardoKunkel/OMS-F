import { PdfMakerService } from './../../services/pdf-maker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

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
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }
  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
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
}
