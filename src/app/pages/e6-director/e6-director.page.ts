import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Cell, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';
@Component({
  selector: 'app-e6-director',
  templateUrl: './e6-director.page.html',
  styleUrls: ['./e6-director.page.scss'],
})
export class E6DirectorPage implements OnInit {

  datos:any={
    conocimientosEspecificos:[
      {value:'Financieros Básicos'},
      {value:'Contables Básicos'},
      {value:'Administrativo'}
    ],
    caracteristicasPersonales:[
      {value:'Toma de desiciones'},
      {value:'Trabajo bajo presión'},
      {value:'Autoliderazgo'}
    ],
    destrezasTecnicas:[
      {value:'Dominio de paqueteria office'},
      {value:'Bases informaticas'},
      {value:'Manejo de Software gasolinero'}
    ],
    equipoProteccionPersonal:[
      {value:'Equipo-covid-19'}
    ],
    caracteristicasFisicas:[
      {value:'Proactividad'},
      {value:'Empatico'},
      {value:'Buena salud'}
    ],
    personalCargo:[
      {value:'Gerente'},
      {value:'Contador'},
      {value:'Aréa financiera'}
    ],
    herramientas:[
      {value:'Computadora'},
      {value:'Equipos tecnologicos'}
    ]
  }

  constructor(
    public modalCtrl: ModalController,
   // private route : ActivatedRoute,
  ) { }

  ngOnInit() {
   // const id = this.route.snapshot.paramMap.get('custom_id');
   // console.log(id,'Elemento 6 perfil puesto Director');
  }

  
  add(){
    let conocimiento = ()=>{this.datos.conocimientosEspecificos.push({'value':''})};
    let caracteristicas = () =>{this.datos.caracteristicasPersonales.push({'value':''})}; 
    let destrezas = () =>{this.datos.destrezasTecnicas.push({'value':' '})};
    let equipoPersonal = () =>{this.datos.equipoProteccionPersonal.push({'value':' '})};
    let personalCargo = () =>{this.datos.personalCargo.push({'value':' '})};
    let caracteristicasFisicas = () =>{this.datos.caracteristicasFisicas.push({'value':' '})};
    let herramientas = () =>{this.datos.herramientas.push({'value':' '})};
    return {caracteristicas, conocimiento, destrezas, equipoPersonal, personalCargo, caracteristicasFisicas, herramientas}
  }

  delete(e){
    console.log(e);
    this.datos.conocimientosEspecificos.splice(e, 1);
    // this.anArray[e]; 
    // let trash = delete(this.anArray, e)
  }

  ver(){
    console.log(this.datos.conocimientosEspecificos);
    
  }

  dissmis(){
    this.modalCtrl.dismiss();
  }

  fn( ){
    let specificLearning = this.datos.conocimientosEspecificos.map(stack =>[
      stack.value
    ]);

    let prueba2 = this.datos.caracteristicasPersonales.map(stack =>[
      stack.value
    ]);

    let destrezas = this.datos.destrezasTecnicas.map(stack => [
      stack.value
    ]);
    
    let equipoPersonal = this.datos.equipoProteccionPersonal.map( stack =>[
      stack.value
    ]);

    let personalCargo = this.datos.personalCargo.map( stack => [
      stack.value
    ]);

    let caracteristicaFisica = this.datos.caracteristicasFisicas.map(stack => [
      stack.value
    ]);

    let herramientas = this.datos.herramientas.map(stack => [
      stack.value
    ]);

    return{ specificLearning, prueba2, destrezas, equipoPersonal, personalCargo, caracteristicaFisica, herramientas}
  }

  pdf(){
    const pdf = new PdfMakeWrapper();
    pdf.add(
      new Table([
        [
          new Cell(new Txt('Puesto').end).end,
          new Cell(new Txt('Director').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Area').end).end,
          new Cell(new Txt('Dirección').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Jefe Inmediato').end).end,
          new Cell(new Txt('No aplica').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Objetivo del puesto').end).end,
          new Cell(new Txt(' Supervisar la correcta aplicación de los procedimientos que involucran controles de los aspectos ambientales signifcativos y de riesgos de las actividades propias de las operaciones y procesos de la Planta de Distribución.').alignment('justify').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Funciones especifícas').end).end,
          new Cell(
            new Ul([
              'Capacitar al personal en los procedimientos aplicables al control de los aspectos ambientales signifcativos y riesgos.',
              'Cumplir el programa de mantenimiento a sistemas, instalaciones, equipos o accesorios de la Planta de Distribución.',
              'Establecer en coordinación del representante Técnico, las funciones, responsabilidad y autoridad de los integrantes de la Organización ',
              'Identifcar, asignar y demostrar que se cuenta con los recursos necesarios para implementar el Sistema de Administración (SA).'
            ]).alignment('justify').type('square').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Conocimientos especifícos').end).end,
          new Cell(
            new Ul(
              this.fn().specificLearning
            ).alignment('justify').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Caracteristicas personales').end).end,
          new Cell(
            new Ul(
              this.fn().prueba2
            ).alignment('justify').end
          ).end,
          new Cell(new Txt('Destrezas Técnicas ').end).end,
          new Cell(
            new Ul(
              this.fn().destrezas
            ).alignment('justify').end
          ).end
        ],
        [
          new Cell(new Txt('Nivel academico requerido').end).end,
          new Cell(new Txt('Licenciatura ').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Requerimientos físicos').end).end,
          new Cell(
            new Ul(
              this.fn().caracteristicaFisica
            ).alignment('justify').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Personal a su cargo').end).end,
          new Cell(
            new Ul(
              this.fn().personalCargo
            ).alignment('justify').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Herramientas y o equipos').end).end,
          new Cell(
            new Ul(
              this.fn().herramientas
            ).alignment('justify').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Equipo de protección personal').end).end,
          new Cell(
            new Ul(
              this.fn().equipoPersonal
            ).alignment('justify').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ]
      ]).widths([170, 100, 100, 100]).end
    );

    

    pdf.add([
      pdf.ln(2),
      new Table([
        [
          new Cell(new Txt('REVISADO POR:').end).border([true, true, true, false]).end,
          new Cell(new Txt('APROBADO POR:').end).border([true, true, true, false]).end,
          new Cell(new Txt('FECHA DE APROBACION:').end).border([true, true, true, false]).end,
        ],
        [
          new Cell(new Txt(' ').end).border([true, false, false, false]).end,
          new Cell(new Txt(' ').end).border([true, false, false, false]).end,
          new Cell(new Txt(' ').end).border([true, false, true, false]).end,
        ],
        [
          new Cell(new Txt(`{nombre} \n REPRESENTANTE TÉCNICO`).end).border([true, false, false, true]).end,
          new Cell(new Txt(`{nombre} \n MÁXIMA AUTORIDAD`).end).border([true, false, false, true]).end,
          new Cell(new Txt(`{fecha} \n `).end).border([true, false, true, true]).end,
        ],
      ]).end
    ])

    pdf.create().open();
  }

}
