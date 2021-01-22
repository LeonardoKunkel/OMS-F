import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-federal-model',
  templateUrl: './federal-model.page.html',
  styleUrls: ['./federal-model.page.scss'],
})
export class FederalModelPage implements OnInit {

  regulaciones:any=[
    {
     nombre:'ASEA',
     obligacion:[
       {
         nombre:'Programa de Mantenimiento Anualizado con programacion de actividades',
         description:'mdnjdndnd'
       },
       {
         nombre:'Llenado de Bitacoras  NOM-005-ASEA-2016',
         description:''
       },
       {
         nombre:'Certificados de Funcionamiento de Tierras Fisicas y Sistema Electrico',
         description:''
       },
       {
         nombre:'Pruebas de Hermeticidad en Tanques y Lineas',
         description:''
       },
       {
         nombre:'Prueba de la Eficiencia del sistema de recuperacion de vapores (DONDE APLIQUE)',
         description:''
       },
       {
         nombre:'Cédula de Opración Anual (COA) Un año calendario posterior a la obtencion de la resolucion LAU',
         description:''
       },
       {
         nombre:'Certificado de Limpieza Ecológica y Traslado de Residuos Peligrosos',
         description:''
       },
       {
         nombre:'Sistema de Gestión de Medición',
         description:''
       },
       {
         nombre:'Dictamen Electrico',
         description:''
       },
       {
         nombre:'Certificado de Cumplimiento del  Sistema de Gestion de Medición',
         description:''
       },
       {
         nombre:'SASISOPA',
         description:''
       },
       {
         nombre:'DICTAMEN DEL SASISOPA (Sistema de Admon. De Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente)',
         description:''
       }
     ] 
    },
    {
     nombre:'CRE',
     obligacion:[
      {
        nombre:'Entrega de Información Diaria sobre Volúmenes Comprados y Vendidos y precios de Compra y Precios de Venta',
        description:''
      },
      {
        nombre:'Dictamen Operación y Mantenimiento NOM-005-ASEA-2016',
        description:''
      },
      {
        nombre:'Realizar pruebas sobre Calidad de Combustibles conforme a la NOM-016-CRE-2016 (Laboratorio)',
        description:''
      },
      {
        nombre:'Dictamen Especificación de Calidad de Petrolíferos.NOM-016-CRE-2016 (Unidad de Verificación)',
        description:''
      },
      {
        nombre:'Aviso de Contratación de Póliza de Seguros ,Resposabilidad Civil y Responsablidad al Medio Ambiente',
        description:''
      },
      {
        nombre:'Reporte de Quejas Correspondientes al año anterior',
        description:''
      },
      {
        nombre:'Reporte de Procedencia de Producto Correspondiente al Año Anterior.',
        description:''
      },
      {
        nombre:'Comprobante de Pago de Aprovechamientos  CRE ANUAL (Supervisión de Ejercicio)',
        description:''
      },
      {
        nombre:'Modificación de Estructura Accionaria',
        description:''
      }
     ] 
    },
    {
    nombre:'CRE y ASEA',
    obligacion:[
      {
        nombre:'Reporte de Incidentes, Accidentes o Emergencias',
        description:''
      },
      {
        nombre:'Análisis Causa Raíz de Incidentes o Accidentes',
        description:''
      }
    ]
    },
    {
    nombre:'STPS ',
    obligacion:[
      {
        nombre:'Programa de Capacitación y Adiestramiento',
        description:''
      },
      {
        nombre:'Capacitación en el USO de Extintores',
        description:''
      },
      {
        nombre:'DC3 Constancia de Habilidades TRABAJOS EN ALTURA (NOM-009-STPS-2011)',
        description:''
      },
      {
        nombre:'DC-3 Certificado de Mantenimiento a Extintores',
        description:''
      }
    ]
    },
    {
    nombre:'SAT',
    obligacion:[
      {
        nombre:'Imss',
        description:''
      },
      {
        nombre:'Diot',
        description:''
      },
      {
        nombre:'Provicional de impuestos del mes anterior',
        description:''
      },
      {
        nombre:'Balanza para pedir la contabilidad electronica',
        description:''
      }
    ]
    },
    {
    nombre:'PROFECO',
    obligacion:[
      {
        nombre:'Aviso de control a distancia(Nom-185)',
        description:''
      },
      {
        nombre:'Aprobación de modelo o prototipo',
        description:''
      },
      {
        nombre:'Dictamen del CENAM de acuerdo a la certificación',
        description:''
      },
      {
        nombre:'Facturas de dispensarios(En caso de reemplazar)',
        description:''
      },
      {
        nombre:'Dictamen de calibración de la jarra patrón',
        description:''
      },
      {
        nombre:'Ultima calibración de dispensarios (original o copia)',
        description:''
      },
      {
        nombre:'Ultima visita de profeco',
        description:''
      },
      {
        nombre:'Carta de inocuidad certificada del control volumetrico',
        description:''
      },
      {
        nombre:'Checklist de tarjetas electronicas',
        description:''
      },
      {
        nombre:'Permiso de expendio de petroliferos',
        description:''
      },
      {
        nombre:'Dictamen de calidad petroliferos',
        description:''
      },
      {
        nombre:'Constancia de situación fiscal actualizada',
        description:''
      },
      {
        nombre:'UVI (cuando cambian dispensarios o dos veces  al año o cuando tu requieres)',
        description:''
      },
      {
        nombre:'Bitacoras de aperturas (Debe coincidir las aperturas con visitas de profeco o UVI o servicio tecnico)',
        description:''
      }
    ]
    }
  ]

  usuarios:any[]=[];

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.usuarios = [
      {
        nombre:'Jose',
        apellido:'Perez',
        profesion:'Maestro',
        edad:45
      }
    ]
  }
  

  opcion($event){
   // console.log($event.detail.value);
    console.log($event);
    
  }

  dismiss(){
    this.modalCtrl.dismiss()
  }

}
