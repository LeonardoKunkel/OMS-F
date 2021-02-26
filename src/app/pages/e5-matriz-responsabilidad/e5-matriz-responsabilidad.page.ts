import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e5-matriz-responsabilidad',
  templateUrl: './e5-matriz-responsabilidad.page.html',
  styleUrls: ['./e5-matriz-responsabilidad.page.scss'],
})
export class E5MatrizResponsabilidadPage implements OnInit {
  index=null;
  array:any=[];
  matriz:any=[
    {
      elemento:'politica',
      incisos:[
        {
          nombre:'a. Establecer la Política ',
          dir:'AR',
          re:'R',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Comunicar la Política',
          dir:'R',
          re:'I',
          encar:'I',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:'I'
        },
        {
          nombre:'c. Evaluar la Política anualmente',
          dir:'AR',
          re:'AR',
          encar:'I',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ],
    },
    {
      elemento:'Identifcación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales.',
      incisos:[
        {
          nombre:'a. Identifcar los aspectos ambientales',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:'I'
      },
      {
        nombre:'b. Identifcar los Riesgos',
        dir:'',
        re:'AR',
        encar:'AR',
        jefP:'I',
        des:'I',
        perM:'I',
        conPro:'I'
      },
      {
        nombre:'c. Evaluar los aspectos ambientales',
        dir:'',
        re:'R',
        encar:'',
        jefP:'',
        des:'',
        perM:'',
        conPro:''
      },
      {
        nombre:'d. Realizar el Análisis de Riesgo de la estación de Servicio',
        dir:'',
        re:'R',
        encar:'',
        jefP:'',
        des:'',
        perM:'',
        conPro:''
      },
      {
        nombre:'e. Comunicas los aspectos ambientales y los riesgos y medidas de control ',
        dir:'',
        re:'R',
        encar:'R',
        jefP:'I',
        des:'I',
        perM:'I',
        conPro:'I'
      }
      ]
    },
    {
      elemento:'Requisitos Legales',
      incisos:[
        {
          nombre:'a. Identifcar los requisitos legales',
          dir:'',
          re:'R',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Comunicar los requisitos legales',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ]
    },
    {
      elemento:'Objetivos Metas e indicadores.',
      incisos:[
        {
          nombre:'a. Establecer los Objetivos y metas',
          dir:'AR',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'b. Diseñar los indicadores',
          dir:'',
          re:'AR',
          encar:'I',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'c. Elaborar programa de gestión de objetivos y metas',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'d. Comunicar los objetivos',
          dir:'',
          re:'R',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        }
      ]
    },
    {
      elemento:'Funciones, Responsabilidad y Autoridad.',
      incisos:[
        {
          nombre:'a. Establecer la estructura para implantar el SA',
          dir:'AR',
          re:'I',
          encar:'I',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'b. Establecer funciones y responsabilidades ',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'c. Designar al Representante técnico ',
          dir:'AR',
          re:'I',
          encar:'I',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        },
        {
          nombre:'d. Establecer los recursos para implantar el SA',
          dir:'AR',
          re:'I',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''  
        }
      ]
    },
    {
      elemento:'Competencia, Capacitación y Entrenamiento',
      incisos:[
        {
          nombre:'a. Elaborar perfles del puesto',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Detectar las Necesidades de Capacitación',
          dir:'',
          re:'A',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Elaborar programa de capacitación y entrenamiento',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'d. Aplicar programa de capacitación',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'e. Evaluar la efcacia de la capacitación ',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    },
    {
      elemento:'Comunicación, Participación y Consulta.',
      incisos:[
        {
          nombre:'a. Comunicar la información relacionada con el SA ',
          dir:'AR',
          re:'AE',
          encar:'R√',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Recibir las quejas y sugerencias, o solicitud de información del SA',
          dir:'',
          re:'',
          encar:'AR',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Participar en el SA mediante sugerencias o quejas',
          dir:'',
          re:'',
          encar:'AR',
          jefP:'R',
          des:'R',
          perM:'R',
          conPro:'R'
        },
        {
          nombre:'d. Atender y dar seguimiento a las quejas y sugerencias',
          dir:'AR',
          re:'AR',
          encar:'AR',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ]
    },
    {
      elemento:'Control de Documentos y Registros.',
      incisos:[
        {
          nombre:'a. Establecer los criterios para el control de documentos',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Mantener y resguardar documentos y registros',
          dir:'',
          re:'',
          encar:'AR',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    },
    {
      elemento:'Mejores Prácticas y estándares.',
      incisos:[
        {
          nombre:'a. Identifcar las mejores prácticas y estándares',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Mantener actualizado el inventario de códigos y estándares',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ]
    },
    {
      elemento:'Control de Actividades y Procesos.',
      incisos:[
        {
          nombre:'a. Identifcar los criterios para control de riesgos y aspectos ambientales',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Documentar los procedimientos para control de actividades y procesos',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Comunicar los controles de actividades y procesos a contratistas ',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'d. Aplicar Controles de aspectos ambientales y riesgos ',
          dir:'',
          re:'',
          encar:'R',
          jefP:'R',
          des:'R',
          perM:'R',
          conPro:'R'
        } 
      ]
    },
    {
      elemento:'Integridad Mecánica y Aseguramiento de la Calidad.',
      incisos:[
        {
          nombre:'a. Elaborar programa de mantenimiento preventivo ',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre: 'b. Elaborar Listado de equipos críticos',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Desarrollar procedimientos de mantenimiento',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'d. Cumplir programa de mantenimiento ',
          dir:'',
          re:'',
          encar:'R',
          jefP:'R',
          des:'',
          perM:'R',
          conPro:''
        }
      ]
    },
    {
      elemento:'Seguridad de Contratistas',
      incisos:[
        {
          nombre:'a. Determinar la responsabilidad de contratistas',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Seleccionar contratistas',
          dir:'',
          re:'',
          encar:'AR',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Evaluar contratistas',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    },
    {
      elemento:'Preparación y Respuesta a Emergencias',
      incisos:[
        {
          nombre:'a. Identifcar situaciones potenciales de emergencia',
          dir:'',
          re:'AR',
          encar:'I',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:'I'
        },
        {
          nombre:'b. Elaborar Planes de Respuesta de cada emergencia identifcada',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Integrar Brigadas de emergencia ',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'R',
          des:'R',
          perM:'R',
          conPro:''
        },
        {
          nombre:'d. Planear, ejecutar y evaluar los simulacros de emergencias ',
          dir:'',
          re:'A',
          encar:'R',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:'I'
        }
      ]
    },
    {
      elemento:'Monitoreo, verifcación y evaluación.',
      incisos:[
        {
          nombre:'a. Identifcar operaciones a monitorear y medir',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Evaluar cumplimiento de requisitos legales',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Administrar hallazgos derivados del monitoreo del SA',
          dir:'',
          re:'A',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ]
    },
    {
      elemento:'Auditorías',
      incisos:[
        {
          nombre: 'a. Planifcar, implementar y mantener un programa de auditorias ',
          dir:'',
          re:'AR',
          encar:'I',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:''
        },
        {
          nombre:'b. Establecer criterios de competencia para selección de auditores',
          dir:'',
          re:'AR',
          encar:'',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Atender hallazgos de auditoría ',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    },
    {
      elemento:'Investigación de Incidentes y Accidentes. ',
      incisos:[
        {
          nombre:'a. Registrar, reportar e investigar accidentes e incidentes',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'I',
          des:'I',
          perM:'I',
          conPro:'I'
        },
        {
          nombre:'b. Atender recomendaciones originadas de la investigación de incidentes',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Elaborar Estadística de incidentes y accidentes',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    },
    {
      elemento:'Revisión de Resultados.',
      incisos:[
        {
          nombre:'a. Preparar información para el informe de resultados',
          dir:'',
          re:'AR',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Realizar Revisión de Resultados',
          dir:'AR',
          re:'R',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'c. Atender acciones resultantes por desviaciones del SA',
          dir:'',
          re:'R',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        }
      ]
    },
    {
      elemento:'Informes de Desempeño.',
      incisos:[
        {
          nombre:'a. Comunicar los Resultados del desempeño a todos los niveles',
          dir:'',
          re:'',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        },
        {
          nombre:'b. Informar a la ASEA el desempeño del SA',
          dir:'',
          re:'R',
          encar:'R',
          jefP:'',
          des:'',
          perM:'',
          conPro:''
        } 
      ]
    }
  ]



  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    console.log(id);
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add([
      new Table([
        [
          new Cell(new Txt('Elemento').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Descripcion').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Dirección').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Representante Técnico').end).fillColor('#d79043').end,
          new Cell(new Txt('Encargado').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Jefe de Piso').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Despachadoras').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Personal de Mantenimiento').alignment('center').end).fillColor('#d79043').end,
          new Cell(new Txt('Contratistas,Proveedores').alignment('center').end).fillColor('#d79043').end
        ]
      ]).widths([60, 335, 8, 8, 8, 8, 8, 8, 8, 8]).end
    ])

    for (let i = 0; i < this.matriz.length; i++) {pdf.add([
      new Table([
        [
          new Cell(new Txt(`${i+1}`).alignment('justify').end).fillColor('#d79043').end,
          new Cell(new Txt(`${this.matriz[i].elemento}`).alignment('justify').end).fillColor('#d79043').colSpan(8).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end,
          new Cell(new Txt(``).end).end
        ]
      ]).widths([60, 335, 8, 8, 8, 8, 8, 8, 8, 8]).end
    ])
    for (let index = 0; index < this.matriz[i].incisos.length; index++) {
      // console.log(this.matriz[i].elemento, index);
      pdf.add(
        new Table([
          [
            new Cell(new Txt(``).fontSize(8).end).fillColor('#d79043').border([false, false, false, false]).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].nombre}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].dir}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].re}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].encar}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].jefP}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].des}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].perM}`).fontSize(8).end).end,
            new Cell(new Txt(`${this.matriz[i].incisos[index].conPro}`).fontSize(8).end).end,
          ]
        ]).widths([60, 335, 8, 8, 8, 8, 8, 8, 8, 8]).end
      )
    }
      
    }
    pdf.create().open();
  }

}
 