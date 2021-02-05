import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController, ToastController } from '@ionic/angular';
import { E2AspectosService } from 'src/app/services/e2-aspectos.service';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { AspectosModalPage } from './aspectos-modal/aspectos-modal.page';
@Component({
  selector: 'app-e2-aspectos',
  templateUrl: './e2-aspectos.page.html',
  styleUrls: ['./e2-aspectos.page.scss'],
})
export class E2AspectosPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;

  public swipeNext(){
    this.slides.slideNext();
  }
  
  public swipeBack(){
    this.slides.slidePrev();
  }

  aspectosAmbientales:any=[
    {
      area:'ALMACENAMIENTO DE COMBUSTIBLES',
      array:[
        {
          act:'Entrada maniobra de autotanque (Recepción AT)',
          eql:'Autotanque',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'X',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01',
            'P-IM-02'
          ]
        },
        {
          act:'Toma muestra de producto (Recepción AT)',
          eql:'Autotanque',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Conexión de mangueras (Recepción AT) ',
          eql:'Autotanque y tanque de almacenamiento',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01',
            'P-IM-02'
          ]
        },
        {
          act:'Descarga de hidrocarburo (Recepción AT) ',
          eql:'Autotanque y tanque de almacenamiento',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar emisiones',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Derrame durante en llenado (Recepción AT)',
          eql:'Autotanque y tanque de almacenamiento',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Potencial',
          condOp:'Emergencia',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Desconexión de Mangueras (Recepción AT)',
          eql:'Autotanque y tanque de almacenamiento',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'',
          eql:'Autotanque y tanque de almacenamiento',
          element:'Hidrocarburo goteo al piso ',
          imAmb:'Suelo',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Desconexión de Mangueras (Recepción AT) ',
          eql:'Autotanque y tanque de almacenamiento',
          element:'Hidrocarburo goteo que se lava y se va al drenaje',
          imAmb:'Agua',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Escurrimiento de autotanque(Recepción AT)',
          eql:'Autotanque y tanque de almacenamiento',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU',
          eliminacion:'',
          sustitucion:'',
          control:'X',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01'
          ]
        },
        {
          act:'Salida maniobra de autotanque(Recepción AT)',
          eql:'Autotanque',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'X',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar incidentes',
          proc:[
            'P-OP-01',
            'P-IM-02'
          ]
        },
        {
          act:'Almacenamiento derrame',
          eql:'Tanque de almacenamiento',
          element:'Hidrocarburo',
          imAmb:'Suelo',
          realPot:'Potencial',
          condOp:'Emergencia',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-138-SEMARNAT/SSA1-2012,',
          eliminacion:'',
          sustitucion:'',
          control:'X',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01',
            'P-IM-02',
            'P-SA-06'
          ]
        },
        {
          act:'Almacenamiento derrame',
          eql:'Tanque de almacenamiento',
          element:'Hidrocarburo',
          imAmb:'Suelo',
          realPot:'Potencial',
          condOp:'Emergencia',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-138-SEMARNAT/SSA1-2012,',
          eliminacion:'',
          sustitucion:'',
          control:'X',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-01',
            'P-IM-02',
            'P-SA-06'
          ]
        },
        {
          act:'Venteo',
          eql:'Tuberías de venteo',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Potencial',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'LAU) Licencia Ambiental Única ',
          eliminacion:'',
          sustitucion:'',
          control:'X',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar emisiones',
          proc:[
            'P-IM-02'
          ]
        },
        {
          act:'Venteo incendio',
          eql:'Tuberías de venteo',
          element:'Emisiones',
          imAmb:'Aire',
          realPot:'Potencial',
          condOp:'Emergencia',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar emisiones',
          proc:[
            'P-OP-01',
            'P-IM-02',
            'P-PRE-01'
          ]
        },
        {
          act:'Retiro de aguas aceitosas (purgado de agua)',
          eql:'Tanque de almacenamiento',
          element:'Agua contaminada',
          imAmb:'Agua',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-02'
          ]
        },
        {
          act:'Retiro de lodos(limpieza interior de tanque)',
          eql:'Tanque de almacenamiento',
          element:'Lodos aceitosos',
          imAmb:'Residuos Peligrosos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-02',
            'P-TS-05'
          ]
        },
        {
          act:'Retiro de aguas aceitosas y materiales impregnados(limpieza de bocatomas)',
          eql:'Tanque de almacenamiento',
          element:'Residuos impregnados',
          imAmb:'Residuos Peligrosos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-02',
            'P-TS-05'
          ]
        }
       ]
    },
    {
      area:'MÓDULO DE DESPACHO DE ABASTECIMIENTO DE COMBUSTIBLE A VEHICULOS',
      array:[
        {
          act:'Generación de aguas aceitosas y materiales impregnados(limpieza del área)',
          eql:'Área de tanque de almacenamiento',
          element:'Agua contaminada',
          imAmb:'Agua',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-04',
            'P-IM-05'
          ]
        },
        {
          act:'Colocación de la pistola en el vehículo',
          eql:'Vehículo',
          element:'Hidrocarburo goteo y se lava y se va al drenaje',
          imAmb:'Agua',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'x',
          control:'',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-02'
          ]
        },
        {
          act:'Carga de hidrocarburo',
          eql:'Vehículo',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'(LAU) Licencia Ambiental Única ',
          eliminacion:'',
          sustitucion:'',
          control:'x',
          senalizacion:'',
          controlAmbo:'',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-OP-02'
          ]
        },
        {
          act:'Termino del despacho y retiro de pistola del vehículo',
          eql:'Vehículo',
          element:'Hidrocarburo goteo y se lava y se va al drenaje',
          imAmb:'Agua',
          realPot:'REAL',
          condOp:'',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-002-SEMARNAT-1996',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrame',
          proc:[
            'P-OP-02'
          ]
        },
        {
          act:'Suministro de lubricantes, aditivos.',
          eql:'Vehículo',
          element:'Envases y estopa o franela impregnados de aceite o aditivos',
          imAmb:'Residuos peligrosos',
          realPot:'REAL',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-OP-02'
          ]
        },
        {
          act:'Limpieza de dispensarios e islas',
          eql:'Dispensario',
          element:'Consumo de agua',
          imAmb:'Agua',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Ley de aguas Nacionales (LAN) 2012',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Reducir consumo de agua',
          proc:[
            'P-IM-01'
          ]
        },
        {
          act:'Limpieza de contenedores',
          eql:'Dispensario',
          element:'Aguas contaminadas y material impregnados con hidrocarburos ',
          imAmb:'Residuos peligrosos',
          realPot:'REAL',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-01'
          ]
        },
        {
          act:'Cambio de filtros',
          eql:'Dispensario',
          element:'Filtros impregnados de hidrocarburo',
          imAmb:'Residuos peligrosos',
          realPot:'REAL',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-01 '
          ]
        },
        {
          act:'Cambio de mangueras, conexiones o pistolas',
          eql:'Dispensario',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'REAL',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Licencia Ambiental Única (LAU)',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-IM-01'
          ]
        },
      ]
    },
    {
      area:'DRENAJES Y TRAMPA DE COMBUSTIBLES',
      array:[
        {
          act:'Limpieza',
          eql:'Registros, tubería y trampa',
          element:'Lodos impregnados de hidrocarburos y aceites',
          imAmb:'Residuos peligrosos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-05'
          ]
        },
        {
          act:'Limpieza',
          eql:'Rejillas',
          element:'Recolección de residuos sólidos no peligrosos',
          imAmb:'Residuos sólidos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-05'
          ]
        },
        {
          act:'Separación de hidrocarburo',
          eql:'Trampa de gasolina y Diesel',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'(LAU) Licencia Ambiental Única',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-IM-05'
          ]
        }
      ]
    },
    {
      area:'OFICINAS Y BAÑOS',
      array:[
        {
          act:'Actividades cotidianas sin riesgo',
          eql:'Contenedores',
          element:'Generación de residuos',
          imAmb:'Residuos sólidos no peligrosos (basura)',
          realPot:'Real ',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-04',
            'P-IM-05'
          ]
        },
        {
          act:'Actividades cotidianas sin riesgo',
          eql:'Instalaciones eléctricas',
          element:'Consumo de energía eléctrica',
          imAmb:'Recursos naturales',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Ley del servicio público de Energía Eléctrica',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Reducir consumo',
          proc:[
            'P-IM-03'
          ]
        },
        {
          act:'Actividades cotidianas sin riesgo',
          eql:'Sanitarios',
          element:'Consumo de agua',
          imAmb:'Recursos naturales',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Ley de aguas Nacionales (LAN) 2012',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Reducir consumo',
          proc:[
          ]
        },
        {
          act:'Actividades cotidianas sin riesgo',
          eql:'Consumo de papel',
          element:'Consumo de papel',
          imAmb:'Recursos naturales',
          realPot:'Real ',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Reducir consumo',
          proc:[
          ]
        }
      ]
    },
    {
      area:'CUARTO DE CONTROL ELÉCTRICO',
      array:[
        {
          act:'Operación normal',
          eql:'Consumo de energía eléctrica',
          element:'Recursos naturales',
          imAmb:'Recursos naturales ',
          realPot:'REAL',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Ley del servicio público de energía eléctrica',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'',
          proc:[
            'P-IM-03'
          ]
        },
        {
          act:'Mantenimiento',
          eql:'Tableros eléctricos',
          element:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos',
          imAmb:'Residuos peligrosos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-03'
          ]
        },
        {
          act:'Operación normal',
          eql:'Planta de emergencia',
          element:'HTC, BETX y Hexano',
          imAmb:'Aire',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'(LAU) Licencia Ambiental Única ',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Evitar derrames',
          proc:[
            'P-IM-03'
          ]
        },
        {
          act:'Mantenimiento',
          eql:'Planta de emergencia',
          element:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos sólidos.',
          imAmb:'Residuos peligrosos',
          realPot:'Real',
          condOp:'Rutinaria',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-03'
          ]
        }
      ]
    },
    {
      area:'ÁREA: CUARTO DE MÁQUINAS',
      array:[
        {
          act:'Operación normal',
          eql:'Compresor e hidroneumático',
          element:'Consumo de energía eléctrica',
          imAmb:'Recursos naturales',
          realPot:'Real',
          condOp:'Normal',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:'',
          reqLegal:'Ley del servicio público de Energía Eléctrica',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Reducir consumo',
          proc:[
            'P-IM-06'
          ]
        },
        {
          act:'Mantenimiento',
          eql:'Compresor e hidroneumático',
          element:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos',
          imAmb:'Residuos peligrosos',
          realPot:'Real',
          condOp:'Normal',
          F:0,
          N:0,
          M:0,
          VT:0,
          AAS:' ',
          reqLegal:'NOM-052-SEMARNAT-2005',
          eliminacion:'',
          sustitucion:'',
          control:'',
          senalizacion:'',
          controlAmbo:'X',
          epp:'',
          objMeta:'Control de residuos',
          proc:[
            'P-IM-06'
          ]
        }     
      ]
    }
  ]

  arrayNew:any=[];

  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    F19: '',
    F20: '',
    F21: '',
    F22: '',
    F23: '',
    F24: '',
    F25: '',
    F26: '',
    F27: '',
    F28: '',
    F29: '',
    F30: '',
    F31: '',
    F32: '',
    F33: '',
    F34: '',
    F35: '',
    F36: '',
    F37: '',
    F38: '',
    F39: '',
    N1: '',
    N2: '',
    N3: '',
    N4: '',
    N5: '',
    N6: '',
    N7: '',
    N8: '',
    N9: '',
    N10: '',
    N11: '',
    N12: '',
    N13: '',
    N14: '',
    N15: '',
    N16: '',
    N17: '',
    N18: '',
    N19: '',
    N20: '',
    N21: '',
    N22: '',
    N23: '',
    N24: '',
    N25: '',
    N26: '',
    N27: '',
    N28: '',
    N29: '',
    N30: '',
    N31: '',
    N32: '',
    N33: '',
    N34: '',
    N35: '',
    N36: '',
    N37: '',
    N38: '',
    N39: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
    M19: '',
    M20: '',
    M21: '',
    M22: '',
    M23: '',
    M24: '',
    M25: '',
    M26: '',
    M27: '',
    M28: '',
    M29: '',
    M30: '',
    M31: '',
    M32: '',
    M33: '',
    M34: '',
    M35: '',
    M36: '',
    M37: '',
    M38: '',
    M39: '',
    VT1: '',
    VT2: '',
    VT3: '',
    VT4: '',
    VT5: '',
    VT6: '',
    VT7: '',
    VT8: '',
    VT9: '',
    VT10: '',
    VT11: '',
    VT12: '',
    VT13: '',
    VT14: '',
    VT15: '',
    VT16: '',
    VT17: '',
    VT18: '',
    VT19: '',
    VT20: '',
    VT21: '',
    VT22: '',
    VT23: '',
    VT24: '',
    VT25: '',
    VT26: '',
    VT27: '',
    VT28: '',
    VT29: '',
    VT30: '',
    VT31: '',
    VT32: '',
    VT33: '',
    VT34: '',
    VT35: '',
    VT36: '',
    VT37: '',
    VT38: '',
    VT39: '',
    AAS1: '',
    AAS2: '',
    AAS3: '',
    AAS4: '',
    AAS5: '',
    AAS6: '',
    AAS7: '',
    AAS8: '',
    AAS9: '',
    AAS10: '',
    AAS11: '',
    AAS12: '',
    AAS13: '',
    AAS14: '',
    AAS15: '',
    AAS16: '',
    AAS17: '',
    AAS18: '',
    AAS19: '',
    AAS20: '',
    AAS21: '',
    AAS22: '',
    AAS23: '',
    AAS24: '',
    AAS25: '',
    AAS26: '',
    AAS27: '',
    AAS28: '',
    AAS29: '',
    AAS30: '',
    AAS31: '',
    AAS32: '',
    AAS33: '',
    AAS34: '',
    AAS35: '',
    AAS36: '',
    AAS37: '',
    AAS38: '',
    AAS39: '',
  };

  constructor(
    public toast: ToastController,
    public modalController: ModalController,
    private aspectosService: E2AspectosService
  ) { }

  ngOnInit() {
  }

 async help(){
    const modal = await this.modalController.create({
      component: AspectosModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  calculo(){

    for (let i = 0; i < this.aspectosAmbientales.length; i++) {
      for (let j = 0; j < this.aspectosAmbientales[i].array.length; j++) {
        let F = parseInt(this.aspectosAmbientales[i].array[j].F); 
        let N = parseInt(this.aspectosAmbientales[i].array[j].N);
        let M = parseInt(this.aspectosAmbientales[i].array[j].M);
        let sumaTotal = F + N + M;
        this.aspectosAmbientales[i].array[j].VT = sumaTotal;
        this.arrayNew.push(sumaTotal);
      }
    }
    var top12 = this.arrayNew.sort(function (a, b) { return b - a; }).slice(0, 12);
    var topEnd = top12.length - 1;

    for (let i = 0; i < this.aspectosAmbientales.length; i++) {
      for (let index = 0; index < this.aspectosAmbientales[i].array.length; index++) {
        const validacion = this.aspectosAmbientales[i].array[index].VT >= topEnd ? 'Si' : 'No';
        this.aspectosAmbientales[i].array[index].AAS = validacion;
      }
    }
  }

  pdf(){
    const pdf = new PdfMakeWrapper();

    pdf.add(
      new Table([
        [
          new Cell(new Txt('No').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('ACTIVIDAD, PRODUCTO O SERVICIO').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('EQUIPO/LUGAR').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('ELEMENTO').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('IMPACTO AMBIENTAL').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('REAL O POTENCIA').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('CONDICIÓN DE OPERACIÓN').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('F').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('N').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('M').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('VT').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('AAS SI/No ').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('REQUISITO LEGAL U OTRO REQUISIT').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('SUSTITUCIÓN').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('SEÑALIZACIÓN').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('CONTROL AMVO').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('EPP').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('OBJETIVO O META').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
          new Cell(new Txt('PROCEDIMIENTO DE CONTROL OPERACIONAL AMBIENTAL').fontSize(8).alignment('center').end).color('#ffffff').fillColor('#6f7269').end,
        ]
      ]).widths([10, 80, 60, 50, 50, 40, 50, 5, 5, 5, 5, 15, 70, 5, 5, 5, 5, 60, 60]).end
    )

    for (let index = 0; index < this.aspectosAmbientales.length; index++) {
      pdf.add([
        new Table([
          [
            new Cell(new Txt(`${index+1}. `+`${this.aspectosAmbientales[index].area}`).end).color('#ffffff').fillColor('#6f7269').end
          ]
        ]).widths([747]).end
      ])

      for (let i = 0; i < this.aspectosAmbientales[index].array.length; i++) {
        pdf.add([
          new Table([
            [
              new Cell(new Txt(`${i+1}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].act}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].eql}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].element}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].imAmb}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].realPot}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].condOp}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].F}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].N}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].M}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].VT}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].AAS}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].reqLegal}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].sustitucion}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].control}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].senalizacion}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].controlAmbo}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].epp}`).fontSize(8).end).end,
              new Cell(new Txt(`${this.aspectosAmbientales[index].array[i].objMeta}`).fontSize(8).end).end,
            ]
          ]).widths([10, 80, 60, 50, 50, 40, 50, 5, 5, 5, 5, 15, 70, 5, 5, 5, 5, 60, 60]).end
        ])
      }
    }
    pdf.pageOrientation('landscape');
    pdf.create().open();
  }
}
