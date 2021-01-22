import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
          a:'a. Establecer la Política ',
          b:'b. Comunicar la Política',
          c:'c. Evaluar la Política anualmente'
        }
      ]
    },
    {
      elemento:'Identifcación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales.',
      incisos:[
        {
        a:'a. Identifcar los aspectos ambientales',
        b:'b. Identifcar los Riesgos',
        c:'c. Evaluar los aspectos ambientales',
        d:'d. Realizar el Análisis de Riesgo de la estación de Servicio',
        e:'e. Comunicas los aspectos ambientales y los riesgos y medidas de control '
        
        }
      ]
    },
    {
      elemento:'Requisitos Legales',
      incisos:[
        {
          a:'a. Identifcar los requisitos legales',
          b:'b. Comunicar los requisitos legales'
        }
      ]
    },
    {
      elemento:'Objetivos Metas e indicadores.',
      incisos:[
        {
          a:'a. Establecer los Objetivos y metas',
          b:'b. Diseñar los indicadores',
          c:'c. Elaborar programa de gestión de objetivos y metas',
          d:'d. Comunicar los objetivos'
        }
      ]
    },
    {
      elemento:'Funciones, Responsabilidad y Autoridad.',
      incisos:[
        {
          a:'a. Establecer la estructura para implantar el SA',
          b:'b. Establecer funciones y responsabilidades ',
          c:'c. Designar al Representante técnico ',
          d:'d. Establecer los recursos para implantar el SA'
        }
      ]
    },
    {
      elemento:'Competencia, Capacitación y Entrenamiento',
      incisos:[
        {
          a:'a. Elaborar perfles del puesto',
          b:'b. Detectar las Necesidades de Capacitación',
          c:'c. Elaborar programa de capacitación y entrenamiento',
          d:'d. Aplicar programa de capacitación',
          e:'e. Evaluar la efcacia de la capacitación '
        }
      ]
    },
    {
      elemento:'Comunicación, Participación y Consulta.',
      incisos:[
      {
        a:'a. Comunicar la información relacionada con el SA ',
        b:'b. Recibir las quejas y sugerencias, o solicitud de información del SA',
        c:'c. Participar en el SA mediante sugerencias o quejas',
        d:'d. Atender y dar seguimiento a las quejas y sugerencias'
      }
      ]
    },
    {
      elemento:'Control de Documentos y Registros.',
      incisos:[
        {
          a:'a. Establecer los criterios para el control de documentos',
          b:'b. Mantener y resguardar documentos y registros'
        }
      ]
    },
    {
      elemento:'Mejores Prácticas y estándares.',
      incisos:[
        {
          a:'a. Identifcar las mejores prácticas y estándares',
          b:'b. Mantener actualizado el inventario de códigos y estándares'
        }
      ]
    },
    {
      elemento:'Control de Actividades y Procesos.',
      incisos:[
        {
          a:'a. Identifcar los criterios para control de riesgos y aspectos ambientales',
          b:'b. Documentar los procedimientos para control de actividades y procesos',
          c:'c. Comunicar los controles de actividades y procesos a contratistas ',
          d:'d. Aplicar Controles de aspectos ambientales y riesgos '
        }
      ]
    },
    {
      elemento:'Integridad Mecánica y Aseguramiento de la Calidad.',
      incisos:[
        {
          a:'a. Elaborar programa de mantenimiento preventivo ',
          b:'b. Elaborar Listado de equipos críticos',
          c:'c. Desarrollar procedimientos de mantenimiento',
          d:'d. Cumplir programa de mantenimiento '
        }
      ]
    },
    {
      elemento:'Seguridad de Contratistas',
      incisos:[
        {
          a:'a. Determinar la responsabilidad de contratistas',
          c:'b. Seleccionar contratistas',
          d:'c. Evaluar contratistas'
        }
      ]
    },
    {
      elemento:'Preparación y Respuesta a Emergencias',
      incisos:[
        {
          a:'a. Identifcar situaciones potenciales de emergencia',
          b:'b. Elaborar Planes de Respuesta de cada emergencia identifcada',
          c:'c. Integrar Brigadas de emergencia ',
          d:'d. Planear, ejecutar y evaluar los simulacros de emergencias '
        }
      ]
    },
    {
      elemento:'Monitoreo, verifcación y evaluación.',
      incisos:[
        {
          a:'a. Identifcar operaciones a monitorear y medir',
          b:'b. Evaluar cumplimiento de requisitos legales',
          c:'c. Administrar hallazgos derivados del monitoreo del SA'
        }
      ]
    },
    {
      elemento:'Auditorías',
      incisos:[
        {
          a:'a. Planifcar, implementar y mantener un programa de auditorias ',
          b:'b. Establecer criterios de competencia para selección de auditores',
          c:'c. Atender hallazgos de auditoría '
        }
      ]
    },
    {
      elemento:'Identifcación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales. ',
      incisos:[
        {
          a:'a. Registrar, reportar e investigar accidentes e incidentes',
          b:'b. Atender recomendaciones originadas de la investigación de incidentes',
          c:'c. Elaborar Estadística de incidentes y accidentes'
        }
      ]
    },
    {
      elemento:'Revisión de Resultados.',
      incisos:[
        {
          a:'a. Preparar información para el informe de resultados',
          b:'b. Realizar Revisión de Resultados',
          c:'c. Atender acciones resultantes por desviaciones del SA'
        }
      ]
    },
    {
      elemento:'Informes de Desempeño.',
      incisos:[
        {
          a:'a. Comunicar los Resultados del desempeño a todos los niveles',
          b:'b. Informar a la ASEA el desempeño del SA'
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
    for (let i = 0; i < this.matriz.length; i++) {
      // for (let index = 0; index < this.matriz[i].incisos.length; index++) {
      //   // console.log(this.matriz[i].incisos[index].a,'hhh');
      //   this.array.push(this.matriz[i].incisos[index]);
      // }
      let index= i;
      //console.log(this.matriz[i].incisos,'Insisos', index);
      this.array.push(this.matriz[i].incisos);
      
      
    }
  }

  onClick(){
    console.log(this.array);
    
  }

}
 