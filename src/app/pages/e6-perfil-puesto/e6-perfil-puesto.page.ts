import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import { E6DespachadoresPage } from '../e6-despachadores/e6-despachadores.page';
import { E6DirectorPage } from '../e6-director/e6-director.page';
import { E6EncargadoPage } from '../e6-encargado/e6-encargado.page';
import { E6JefePisoPage } from '../e6-jefe-piso/e6-jefe-piso.page';
import { E6PersonalMantenimientoPage } from '../e6-personal-mantenimiento/e6-personal-mantenimiento.page';
import { E6RepresentanteTecnicoPage } from '../e6-representante-tecnico/e6-representante-tecnico.page';
import { Cell, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-e6-perfil-puesto',
  templateUrl: './e6-perfil-puesto.page.html',
  styleUrls: ['./e6-perfil-puesto.page.scss'],
})


export class E6PerfilPuestoPage implements OnInit {

  @ViewChild('idCarta') idCarta; 

  DataEstacion:any={};
  idEstacion = " ";

  director:any={
    puesto:'Director',
    area:'Dirección',
    jefeInmediato:'No Aplica',
    objetidoPuesto:'Supervisar la correcta aplicación de los procedimientos que involucran controles de los aspectos ambientales signifcativos y de riesgos de las actividades propias de las operaciones y procesos de la Planta de Distribución.',
    funcionesEspecificas:[
      'Capacitar al personal en los procedimientos aplicables al control de los aspectos ambientales signifcativos y riesgos',
      'Cumplir el programa de mantenimiento a sistemas, instalaciones, equipos o accesorios de la Planta de Distribución.',
      'Establecer en coordinación del representante Técnico, las funciones, responsabilidad y autoridad de los integrantes de la Organización',
      'Identifcar, asignar y demostrar que se cuenta con los recursos necesarios para implementar el Sistema de Administración (SA).'
    ],
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }
  
  representante:any={
    puesto:'',
    area:'',
    jefeInmediato:'',
    objetidoPuesto:'',
    funcionesEspecificas:'',
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }

  
  encargado:any={
    puesto:'',
    area:'',
    jefeInmediato:'',
    objetidoPuesto:'',
    funcionesEspecificas:'',
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }

  jefePiso:any={
    puesto:'',
    area:'',
    jefeInmediato:'',
    objetidoPuesto:'',
    funcionesEspecificas:'',
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }
  
  despachadores:any={
    puesto:'',
    area:'',
    jefeInmediato:'',
    objetidoPuesto:'',
    funcionesEspecificas:'',
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }

  personalMantenimiento:any={
    puesto:'',
    area:'',
    jefeInmediato:'',
    objetidoPuesto:'',
    funcionesEspecificas:'',
    caracteristicasPersonales:'',
    destrezasTecnicas:'',
    nivelAcademico:''
  }
  
  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    console.log(id,'Elemento 6 perfil puesto');
  }

  getEstacion(id:string){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
     // console.log(data);
      this.DataEstacion = data;
    });
  }

  // openModal(e){
  //   console.log('hola Mundo', this.idCarta.el.value);
    
    // const pdf = new PdfMakeWrapper();

    // pdf.add(
    //   new Table([
    //     [
    //       new Cell(new Txt('Puesto').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Area').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Jefe Inmediato').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Objetivo del puesto').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Funciones especifícas').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Conocimientos especifícos').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Caracteristicas personales').end).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt('Destrezas Técnicas ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Nivel academico requerido').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Requerimientos físicos').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Personal a su cargo').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Herramientas y o equipos').end).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ],
    //     [
    //       new Cell(new Txt('Equipo de protección personal').end).end,
    //       new Cell(new Txt(' ').end).colSpan(3).end,
    //       new Cell(new Txt(' ').end).end,
    //       new Cell(new Txt(' ').end).end
    //     ]
    //   ]).widths([170, 100, 100, 100]).end
    // );

    // pdf.ln(5)

    // pdf.add(
    //   new Table([
    //     [
    //       new Cell(new Txt('REVISADO POR:').end).border([true, true, true, false]).end,
    //       new Cell(new Txt('APROBADO POR:').end).border([true, true, true, false]).end,
    //       new Cell(new Txt('FECHA DE APROBACION:').end).border([true, true, true, false]).end,
    //     ],
    //     [
    //       new Cell(new Txt(' ').end).border([true, false, false, false]).end,
    //       new Cell(new Txt(' ').end).border([true, false, false, false]).end,
    //       new Cell(new Txt(' ').end).border([true, false, true, false]).end,
    //     ],
    //     [
    //       new Cell(new Txt(`{nombre} \n REPRESENTANTE TÉCNICO`).end).border([true, false, false, true]).end,
    //       new Cell(new Txt(`{nombre} \n MÁXIMA AUTORIDAD`).end).border([true, false, false, true]).end,
    //       new Cell(new Txt(`{fecha} \n `).end).border([true, false, true, true]).end,
    //     ],
    //   ]).end
    // )

    // pdf.create().open();
  //}

  async openModal(){
    const modal = await this.modalCtrl.create({ ///falta llevar el id de la estacion de servicio al modal
      component: E6DirectorPage
    });
    return await modal.present();
  }
  async openModal2(){
    const modal = await this.modalCtrl.create({
      component: E6RepresentanteTecnicoPage
    });
    return await modal.present();
    
  }
  async openModal3(){
    const modal = await this.modalCtrl.create({
      component: E6EncargadoPage
    });
    return await modal.present();
    
  }
  async openModal4(){
    const modal = await this.modalCtrl.create({
      component: E6JefePisoPage
    });
    return await modal.present();
    
  }
  async openModal5(){
    const modal = await this.modalCtrl.create({
      component: E6DespachadoresPage
    });
    return await modal.present();
    
  }
  async openModal6(){
    const modal = await this.modalCtrl.create({
      component: E6PersonalMantenimientoPage
    });
    return await modal.present();
    
  }

}
