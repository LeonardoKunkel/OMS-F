import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-riesgos-modal',
  templateUrl: './riesgos-modal.page.html',
  styleUrls: ['./riesgos-modal.page.scss'],
})
export class RiesgosModalPage implements OnInit {
  frecuencia:any=[
    {
      valor:1,
      nivel:'Remota',
      descripcion:'No se espera que ocurra durante la vida del proyecto.',
      frecuencia:'Una vez cada 100 a 1000 años'
    },
    {
      valor:2,
      nivel:'Baja',
      descripcion:'Se espera que ocurra no más de una vez durante la vida del proyecto',
      frecuencia:'Una vez cada 50 a 1000 años'
    },
    {
      valor:3,
      nivel:'Media',
      descripcion:'Se espera que ocurra varias veces durante la vida de la estación de servicio',
      frecuencia:'Una vez cada 10 años'
    },
    {
      valor:4,
      nivel:'Alta',
      descripcion:'Se espera que ocurra más de una vez en un año',
      frecuencia:'Una vez por año'
    }
  ];

  consecuencia:any=[
    {
      valor:4,
      rango:'Catastrófica',
      criterio:[
        'Una o más fatalidades.',
        'Lesiones o fatalidades en la comunidad.'
      ]
    },
    {
      valor:3,
      rango:'Grave',
      criterio:[
        'Daño permanente en sección localizada del proceso o construcción.',
        'Accidentes incapacitantes u hospitalización.'
      ]
    },
    {
      valor:2,
      rango:'Moderada',
      criterio:[
        'Un accidente incapacitante.',
        'Múltiples lesionados.'
      ]
    },
    {
      valor:1,
      rango:'Menor',
      criterio:[
        'Respuesta a emergencia sin lesionados.'
      ]
    },
  ];

  categorias:any=[
    {
      nivel:'I',
      cat:'INACEPTABLE',
      desc:[
        'No se debe comenzar ni continuar el trabajo hasta que se reduzca el riesgo.',
        'Si no es posible reducir el riesgo, incluso con recursos ilimitados, debe prohibirse el trabajo.'
      ]
    },
    {
      nivel:'II',
      cat:'INDESEABLE',
      desc:[
        'No se debe comenzar el trabajo hasta que se haya reducido el riesgo.',
        'Puede que se precisen recursos considerables para controlar el riesgo.',
        'Cuando el riesgo corresponda a un trabajo que se está realizando, debe remediarse el problema en un tiempo inferior al de los riesgos moderados.',
        'Estos riesgos pasan a ser objetivos del sistema.'
      ]
    },
    {
      nivel:'III',
      cat:'MODERADO',
      desc:[
        'Se deben hacer esfuerzos para reducir el riesgo, determinando las inversiones precisas.',
        'Las medidas para reducir el riesgo deben implantarse en un tiempo determinado.',
        'Cuando el riesgo moderado está asociado con consecuencias extremadamente dañinas (mal o muy graves), se precisará una acción posterior para establecer, con más precisión, la probabilidad del daño como base para determinar la necesidad de mejora de las medidas de control existentes.',
        'Estos riesgos requieren de procedimientos de operación o mantenimiento.'
      ]
    },
    {
      nivel:'IV',
      cat:'ACEPTABLE',
      desc:[
        'No se necesita mejorar la acción preventiva.',
        'Se deben considerar soluciones más rentables o mejoras que no supongan una carga económica importante.',
        'Se requieren comprobaciones periódicas para asegurar que se mantiene la eficacia de las medidas de control.',
        'Estos riesgos requieren de buenas prácticas, las cuales pueden mejorar.'
      ]
    }
  ];

  jerarquizacion:any=[
    {
      probabilidad:'1',
      severidad:[
        'IV',
        'IV',
        'IV',
        'III'
      ]
    },
    {
      probabilidad:'2',
      severidad:[
        'IV',
        'IV',
        'III',
        'II'
      ]
    },
    {
      probabilidad:'3',
      severidad:[
        'IV',
        'III',
        'II',
        'I'
      ]
    },
    {
      probabilidad:'4',
      severidad:[
        'III',
        'II',
        'I',
        'I'
      ]
    }
  ]

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
