import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-aspectos-modal',
  templateUrl: './aspectos-modal.page.html',
  styleUrls: ['./aspectos-modal.page.scss'],
})
export class AspectosModalPage implements OnInit {
  
  frecuencia:any=[
    {
      desc:'Se presenta diariamente',
      grado:'Muy alto',
      value:'10'
    },
    {
      desc:'Se presenta una o dos veces por semana',
      grado:'Alto',
      value:'7'
    },
    {
      desc:'Se presenta una o dos veces al mes',
      grado:'Moderado',
      value:'3'
    },
    {
      desc:'Se presenta una o dos veces al año',
      grado:'bajo',
      value:'1'
    }
  ]

  naturaleza:any=[
    {
      desc:[
        'Muy nocivo o potencialmente fatal; implica un gran esfuerzo para corregir el impacto o recuperar el ambiente.',
        'USO: de productos o insumos que impacten irreversiblemente el ambiente en su ciclo de vida)'
      ],
      grade:'Catastrófico',
      value:'10'
    },
    {
      desc:[
        'Nocivo, pero no potencialmente fatal, impacto difícil de corregir, pero recuperable.',
        'USO: de productos o servicios cuyo impacto en sus etapas del ciclo de vida tienen es difícil de corregir, no hay acciones de prevención al alcance del sistema)'
      ],
      grade:'Critico',
      value:'5'
    },
    {
      desc:[
        'Un poco nocivo; impacto corregible.',
        'USO: de productos o servicios cuyo impacto en sus etapas del ciclo de vida se puede corregir; en este grupo se incluye aquellos productos 100% reciclables o reutilizables, o servicios, cuyo impacto puede ser controlado por nuestro sistema)'
      ],
      grade:'Moderado',
      value:'3'
    },
    {
      desc:[
        'Poco potencial para hacer daño; impacto fácilmente corregible.',
        'USO: de productos o servicios cuyo impacto en sus etapas del ciclo de vida tienen un impacto que se puede corregir en forma natural, sin esfuerzo de reciclado o reutilización, o servicios, cuyo impacto puede ser controlado por nuestro sistema).'
      ],
      grade:'Inofensivo',
      value:'1'
    }
  ]

  magnitud:any=[
    {
      desc:[
        'Generación de residuos, emisiones y descargas fuera de los parámetros de diseño de los equipos.',
        'El consumo de agua, energía, papel, entre otros, está por arriba de los objetivos y metas establecidos por el centro de trabajo o estos objetivos y metas no han sido establecidos'
      ],
      grade:'Alto',
      value:'10'
    },
    {
      desc:[
        'Generación de residuos, emisiones y descargas, en el límite de los parámetros de diseño de los equipos. Los objetivo y metas establecidos por el centro de trabajo para el consumo de agua, energía, papel, entre otros, se encuentran en el límite de cumplimiento.'
      ],
      grade:'Medio',
      value:'3'
    },
    {
      desc:[
        'Generación de residuos, emisiones y descargas que cumplen holgadamente con las especificaciones de diseño de los equipos. Los objetivos y metas establecidos por el centro de trabajo para el consumo de agua, energía, papel, entre otros, se cumplen holgadamente. No aplica.'
      ],
      grade:'Bajo',
      value:'1'
    },

  ]

  constructor(
    public modalCtrl: ModalController
  ) {
   }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
