import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cell, PdfMakeWrapper, Table, Txt, Ul } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-representante-tecnico',
  templateUrl: './e6-representante-tecnico.page.html',
  styleUrls: ['./e6-representante-tecnico.page.scss'],
})
export class E6RepresentanteTecnicoPage implements OnInit {

  datos:any={
    conocimientosEspecificos:[
      {value:'Derecho laboral '},
      {value:'Contables básicos'},
      {value:'Área economico/administrativo'},
      {value:'Protección civil'},
      {value:'Conocimiento en normas'},
      {value:'SAISOPA'},
      {value:'Mercadotecnia'}
    ],
    caracteristicasPersonales:[
      {value:'Toma de desiciones'},
      {value:'Trabajo bajo presión'},
      {value:'Autoliderazgo'},
      {value:'Ecoanime'},
      {value:'Responsable'}
    ],
    destrezasTecnicas:[
      {value:'Dominio de paqueteria office'},
      {value:'Bases informaticas'},
      {value:'Manejo de Software gasolinero'},
      {value:'Uso de Herramientas'},
      {value:'Confinamientos de una estacion de servicio'}
    ],
    equipoProteccionPersonal:[
      {value:'Casco'},
      {value:'Careta covid-19'},
      {value:'hola Eduardo'},
      {value:'Cubre bocas'},
      {value:'Ropa de algodon'},
      {value:'Zapato de seguridad'}
    ],
    caracteristicasFisicas:[
      {value:'Proactivo'},
      {value:'Empatico'},
      {value:'Buena salud'}
    ],
    personalCargo:[
      {value:'Gerente'},
      {value:'Contador'},
      {value:'Aréa financiera'},
      {value:'Despachadores'}

    ],
    herramientas:[
      {value:'Computadora'},
      {value:'Herramientas mecanicas'}
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

  dissmis(){
    this.modalCtrl.dismiss();
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
          new Cell(new Txt('Representante Técnico').end).colSpan(3).end,
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
          new Cell(new Txt('Director').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Objetivo del puesto').end).end,
          new Cell(new Txt('Implementación adecuada y operación del SASISOPA').end).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Funciones especifícas').end).end,
          new Cell(
            new Ul([
              'El representante técnico analiza las actividades que desarrolla el personal involucrado en el proceso de recibo de producto, almacenamiento y distribución del producto.',
              'Asegurar que el Sistema es conforme con los requisitos establecidos en los lineamientos y demás normativa aplicable.',
              'Informar a la Dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.',
              'Desarrollar el perfl de cada puesto.',
              'Determinar los criterios específcos que defnan la competencia necesaria para los diferentes puestos de la organización.',
              'Representar a la Estación de Servicio ante la Agencia.',
              'Garantizar una efcaz implementación del Sistema de Administración.',
              'Proponer la Adopción de las mejores prácticas en materia de Seguridad Industrial, Seguridad Operacional y Protección al Medio Ambiente.',
              'Ser capaz de detectar situaciones críticas por las cuales deba informar a la Agencia.',
              'Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad interna y externa aplicable.'
            ]).type('square').end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Conocimientos especifícos').end).end,
          new Cell(
            new Ul(
              this.fn().specificLearning
            ).end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Caracteristicas personales').end).end,
          new Cell(
            new Ul(
              this.fn().prueba2
            ).end
          ).end,
          new Cell(new Txt('Destrezas Técnicas ').end).end,
          new Cell(
            new Ul(
              this.fn().destrezas
            ).end
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
            ).end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Personal a su cargo').end).end,
          new Cell(
            new Ul(
              this.fn().personalCargo
            ).end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Herramientas y o equipos').end).end,
          new Cell(
            new Ul(
              this.fn().herramientas
            ).end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ],
        [
          new Cell(new Txt('Equipo de protección personal').end).end,
          new Cell(
            new Ul(
              this.fn().equipoPersonal
            ).end
          ).colSpan(3).end,
          new Cell(new Txt(' ').end).end,
          new Cell(new Txt(' ').end).end
        ]
      ]).widths([170, 100, 100, 100]).end
    );

    pdf.ln(5)

    pdf.add(
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
    )

    pdf.create().open();
  }


}
