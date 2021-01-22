import { Component, OnInit } from '@angular/core';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
@Component({
  selector: 'app-e8-lista-maestra-documentos-internos',
  templateUrl: './e8-lista-maestra-documentos-internos.page.html',
  styleUrls: ['./e8-lista-maestra-documentos-internos.page.scss'],
})
export class E8ListaMaestraDocumentosInternosPage implements OnInit {

  PSA:any=[
    {
      clave:'P-SA-01',
      descripcion:'POLÍTICA',
      fechaEmision:'',//base de datos
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-02',
      descripcion:'IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-03',
      descripcion:'REQUISITOS LEGALES',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-04',
      descripcion:'OBJETIVOS, METAS E INDICADORES',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-05',
      descripcion:'FUNCIONES, RESPONSABILIDADES Y AUTORIDAD',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-06',
      descripcion:'COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-07',
      descripcion:'COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-08',
      descripcion:'CONTROL DE DOCUMENTOS Y REGISTROS.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-09',
      descripcion:'MEJORES PRÁCTICAS Y ESTÁNDARES.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-10',
      descripcion:'CONTROL DE ACTIVIDADES Y PROCESOS.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-11',
      descripcion:'INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-12',
      descripcion:'SEGURIDAD DE CONTRATISTAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-13',
      descripcion:'PREPARACIÓN Y RESPUESTA A EMERGENCIAS.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-14',
      descripcion:'MONITOREO, VERIFICACIÓN Y EVALUACIÓN.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-15',
      descripcion:'AUDITORÍAS.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-16',
      descripcion:'INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-17',
      descripcion:'REVISIÓN DE RESULTADOS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-SA-18',
      descripcion:'INFORMES DE DESEMPEÑO.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-OP-01',
      descripcion:'RECEPCIÓN DE AUTOTANQUE Y DESCARGA DE PRODUCTOS A TANQUES DE ALMACENAMIENTO',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-OP-02',
      descripcion:'DESPACHO DE PRODUCTOS INFLAMABLES Y COMBUSTIBLES A VEHÍCULOS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-01',
      descripcion:'ETIQUETA, CANDADEO Y BLOQUEO PARA INTERRUPCIÓN DE LÍNEAS ELÉCTRICAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-02',
      descripcion:'ETIQUETA, CANDADEO Y BLOQUEO PARA INTERRUPCIÓN DE LÍNEAS CON PRODUCTO',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-03',
      descripcion:'TRABAJOS CON HERRAMIENTAS QUE GENEREN FUENTES DE IGNICIÓN',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-04',
      descripcion:'TRABAJOS EN ESCALERAS O PLATAFORMAS EN ALTURAS MAYORES A 1.5 m.',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-05',
      descripcion:'TRABAJOS EN ÁREAS CONFINADAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-TS-06',
      descripcion:'PERMISO DE TRABAJOS PELIGROSOS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-CP-01',
      descripcion:'ADMINISTRACIÓN DE CAMBIOS DE PERSONAL',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-CT-01',
      descripcion:'ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-01',
      descripcion:'MANTENIMIENTO A DISPENSARIOS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-02',
      descripcion:'MANTENIMIENTO A TANQUES',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-03',
      descripcion:'MANTENIMIENTO A INSTALACIONES ELÉCTRICAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-04',
      descripcion:'MANTENIMIENTO A EDIFICIOS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-05',
      descripcion:'MANTENIMIENTO A DRENAJES',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-IM-06',
      descripcion:'MANTENIMIENTO A MAQUINAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-RE-01',
      descripcion:'PLANES DE RESPUESTA A EMERGENCIAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    },
    {
      clave:'P-CR-01',
      descripcion:'METODOLOGÍA DEL ÁRBOL DE FALLAS',
      fechaEmision:'',
      fechaRevision:'',
      noRevicion:0
    }
  ]


  FS:any=[
    {
      clave:'FS-01',
      descripcion:'PROCEDIMIENTOS, PRACTICAS, INSTRUCTIVO, METODOLOGÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-02',
      descripcion:'LISTA MAESTRA DE DOCUMENTOS INTERNOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-03',
      descripcion:'SOLICITUD DE CAMBIOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-04',
      descripcion:'LISTA DE DISTRIBUCIÓN DE DOCUMENTOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-05',
      descripcion:'LISTA DE COMUNICACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-06',
      descripcion:'QUEJAS Y SUGERENCIAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-07',
      descripcion:'REGISTRO Y CONTROL DE QUEJAS Y SUGERENCIAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-08',
      descripcion:'EVALUACIÓN DE ASPECTOS AMBIENTALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-09',
      descripcion:'EVALUACIÓN DE RIESGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-10',
      descripcion:'RESULTADO DEL ANÁLISIS DE RIESGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-11',
      descripcion:'LISTADO DE RIESGOS Y ASPECTOS AMBIENTALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-12',
      descripcion:'OBJETIVOS Y METAS E INDICADORES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-13',
      descripcion:'MATRIZ DE RESPONSABILIDADES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-14',
      descripcion:'PERFIL DEL PUESTO DE TRABAJO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-15',
      descripcion:'DETECCION DE NECESIDADES DE CAPACITACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-16',
      descripcion:'PROGRAMA DE CAPACITACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-17',
      descripcion:'SEGUIMIENTO AL PROGRAMA DE CAPACITACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-18',
      descripcion:'LISTADO DE CÓDIGOS Y ESTÁNDARES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-19',
      descripcion:'ADMINISTRACIÓN DEL CAMBIO DE TECNOLOGÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-20',
      descripcion:'PROGRAMA DE MANTENIMIENTO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-21',
      descripcion:'PLAN DE MANTENIMIENTO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-22',
      descripcion:'LISTADO DE EQUIPO CRÍTICO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-23',
      descripcion:'LISTADO DE REQUISITOS LEGALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-24',
      descripcion:'ANEXO DE SEGURIDAD DE CONTRATISTAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-25',
      descripcion:'ACTA DE INTEGRACIÓN DE LAS BRIGADAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-26',
      descripcion:'PROGRAMA DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-27',
      descripcion:'PLANEACIÓN DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-28',
      descripcion:'EVALUACIÓN DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-29',
      descripcion:'PROGRAMA DE MONITOREO Y MEDICIÓN DE PARÁMETROS DE DESEMPEÑO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-30',
      descripcion:'RESULTADOS DEL MONITOREO DE PARÁMETROS DEL DESEMPEÑO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-31',
      descripcion:'EVALUACIÓN DEL CUMPLIMIENTO DE LOS REQUISITOS LEGALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-32',
      descripcion:'PLAN DE ATENCIÓN DE HALLAZGOS DERIVADOS DEL MONITOREO DEL SA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-33',
      descripcion:'PROGRAMA DE AUDITORÍAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-34',
      descripcion:'PLAN DE AUDITORÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-35',
      descripcion:'INFORME DE AUDITORÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-36',
      descripcion:'PLAN DE ATENCIÓN DE HALLAZGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-37',
      descripcion:'REVISIÓN POR LA DIRECCIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-01',
      descripcion:'PROCEDIMIENTOS, PRÁCTICAS, INSTRUCTIVO, METODOLOGÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-02',
      descripcion:'LISTA MAESTRA DE DOCUMENTOS INTERNOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-03',
      descripcion:'SOLICITUD DE CAMBIOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-04',
      descripcion:'LISTA DE DISTRIBUCIÓN DE DOCUMENTOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-05',
      descripcion:'LISTA DE COMUNICACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-06',
      descripcion:'QUEJAS Y SUGERENCIAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-07',
      descripcion:'REGISTRO Y CONTROL DE QUEJAS Y SUGERENCIAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-08',
      descripcion:'EVALUACIÓN DE ASPECTOS AMBIENTALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-09',
      descripcion:'EVALUACIÓN DE RIESGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-10',
      descripcion:'RESULTADO DEL ANÁLISIS DE RIESGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-11',
      descripcion:'LISTADO DE RIESGOS Y ASPECTOS AMBIENTALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-12',
      descripcion:'OBJETIVOS Y METAS E INDICADORES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-13',
      descripcion:'MATRIZ DE RESPONSABILIDADES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-14',
      descripcion:'PERFIL DEL PUESTO DE TRABAJO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-15',
      descripcion:'DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-16',
      descripcion:'PROGRAMA DE CAPACITACIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-17',
      descripcion:'SEGUIMIENTO AL PROGRAMA DE CAPACITACIÓN  ',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-18',
      descripcion:'LISTADO DE CÓDIGOS Y ESTÁNDARES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-19',
      descripcion:'ADMINISTRACIÓN DEL CAMBIO DE TECNOLOGÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-20',
      descripcion:'PROGRAMA DE MANTENIMIENTO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-21',
      descripcion:'PLAN DE MANTENIMIENTO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-22',
      descripcion:'LISTADO DE EQUIPO CRÍTICO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-23',
      descripcion:'LISTADO DE REQUISITOS LEGALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-24',
      descripcion:'ANEXO DE SEGURIDAD DE CONTRATISTAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-25',
      descripcion:'ACTA DE INTEGRACIÓN DE LAS BRIGADAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-26',
      descripcion:'PROGRAMA DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-27',
      descripcion:'PLANEACIÓN DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-28',
      descripcion:'EVALUACIÓN DE SIMULACROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-29',
      descripcion:'PROGRAMA DE MONITOREO Y MEDICIÓN DE PARÁMETROS DE DESEMPEÑO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-30',
      descripcion:'RESULTADOS DEL MONITOREO DE PARÁMETROS DEL DESEMPEÑO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-31',
      descripcion:'EVALUACIÓN DEL CUMPLIMIENTO DE LOS REQUISITOS LEGALES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-32',
      descripcion:'PLAN DE ATENCIÓN DE HALLAZGOS DERIVADOS DEL MONITOREO DEL SA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-33',
      descripcion:'PROGRAMA DE AUDITORÍAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-34',
      descripcion:'PLAN DE AUDITORÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-35',
      descripcion:'INFORME DE AUDITORÍA',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-36',
      descripcion:'PLAN DE ATENCIÓN DE HALLAZGOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FS-37',
      descripcion:'REVISIÓN POR LA DIRECCIÓN',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-01',
      descripcion:'INSPECCIÓN DE TANQUES Y REGISTROS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-02',
      descripcion:'PRUEBA OPERATIVA DE DISPOSITIVOS DE SEGURIDAD',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-03',
      descripcion:'INSPECCIÓN DE DISPENSARIOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-04',
      descripcion:'INSPECCION DE ACCESORIOS DE DESCARGA Y TUBOS DE VENTEO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-05',
      descripcion:'INSPECCIÓN DE INSTALACIONES ELÉCTRICAS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-06',
      descripcion:'PROGRAMA DE LIMPIEZA Y VERIFICACIÓN DE TRAMPA DE COMBUSTIBLE',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-07',
      descripcion:'INSPECCIÓN MENSUAL DE EXTINTORES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-08',
      descripcion:'INSPECCIÓN DE SEÑALAMIENTOS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-09',
      descripcion:'PERMISO DE TRABAJO PELIGROSO',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-10',
      descripcion:'FORMATO PARA ACR',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-11',
      descripcion:'ENTREVISTA DE PERSONAL',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-12',
      descripcion:'COMPROBACION DE HIPOTESIS',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-13',
      descripcion:'RECOMENDACIONES DE LA ICR',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    },
    {
      clave:'FO-14',
      descripcion:'ESTADÍSTICA DE INCIDENTES',
      fechaEmision:'',
      disposicion:'',
      tiempoRetencion:'',
      procedimientoAsociado:'',
      noRevicion:0
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  pdf(){
    let pdf = new PdfMakeWrapper();

    pdf.add([
      new Table([
        [
          new Cell(new Txt('CLAVE').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('DESCRIPCIÓN DEL DOCUMENTO').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('FECHA DE EMISIÓN').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('FECHA DE REVISIÓN').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('NO. DE REVISIÓN').end).fillColor('#a5c3dd').end,
        ]
        // [new Cell(new Txt('').end).end],
      ]).widths([45, 350, 100, 100, 100]).end
    ]);


    for (let i = 0; i < this.PSA.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.PSA[i].clave}`).end).end,
            new Cell(new Txt(`${this.PSA[i].descripcion}`).end).end,
            new Cell(new Txt(`BD{this.PSA[i].fechaEmicion}`).end).end,
            new Cell(new Txt(`${this.PSA[i].fechaRevision}`).end).end,
            new Cell(new Txt(`${this.PSA[i].noRevicion}`).end).end,
          ]
        ]).widths([45, 350, 100, 100, 100]).end
      )
    }

    pdf.add([
      pdf.ln(2),
      new Table([
        [
          new Cell(new Txt('CLAVE').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('NOMBRE DEL FORMATO').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('FECHA DE EMISIÓN').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('DISPOSICIÓN').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('PROCEDIMIENTO ASOCIADO').end).fillColor('#a5c3dd').end,
          new Cell(new Txt('NO. DE REVISIÓN').end).fillColor('#a5c3dd').end,
        ]
        // [new Cell(new Txt('').end).end],
      ]).widths([45, 320, 80, 80, 80, 80]).end
    ])

    for (let i = 0; i < this.FS.length; i++) {
      pdf.add(
        new Table([
          [
            new Cell(new Txt(`${this.FS[i].clave}`).end).end,
            new Cell(new Txt(`${this.FS[i].descripcion}`).end).end,
            new Cell(new Txt(`fechaBD`).end).end,
            new Cell(new Txt(`${this.FS[i].disposicion}`).end).end,
            new Cell(new Txt(`Nombre Pro`).end).end,
            new Cell(new Txt(`${this.FS[i].noRevicion}`).end).end,
            
          ]
        ]).widths([45, 320, 80, 80, 80, 80]).end
      )
    }

    

    pdf.pageOrientation('landscape');
    pdf.create().open();
  }

}
