import { AutoridadService } from 'src/app/services/autoridad.service';
import { GerenteService } from './../services/gerente.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';

import { AutoridadPage } from '../pages/autoridad/autoridad.page';
import { GerentePage } from '../pages/gerente/gerente.page';
import { RepresentantePage } from '../pages/representante/representante.page';
import { RepresentanteService } from '../services/representante.service';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  representante: any = [];
  autoridad: any = [];
  gerente: any = [];
  personal: any[] = [];

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private _gerente: GerenteService,
    private _autoridad: AutoridadService,
    private _representante: RepresentanteService,
    private _personal: PersonalService,
    private toast: ToastController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getRepresentante();
    this.getMaximaAutoridad();
    this.getGerente();
    this.getPersonal();
  }

  ionViewWillEnter() {
    this.getPersonal();
  }

  async goRepresentante() {
    const modal = await this.modalCtrl.create({
      component: RepresentantePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
    // this.navCtrl.navigateForward('/representante')
  }

  async goGerente() {
    const modal = await this.modalCtrl.create({
      component: GerentePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async goAutoridad() {
    const modal = await this.modalCtrl.create({
      component: AutoridadPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getRepresentante() {
    this._representante.getRepresentante().subscribe((data: any) => {
      console.log(data.representante[0]);
      this.representante = data.representante[0];
    });
  }

  getMaximaAutoridad() {
    this._autoridad.getAutoridad().subscribe((data: any) => {
      console.log(data.autoridad[0]);
      this.autoridad = data.autoridad[0];
    });
  }
  
  getGerente() {
    this._gerente.getGerente().subscribe((data: any) => {
      console.log(data.gerente[0]);
      this.gerente = data.gerente[0];
    });
  }

  

  getPersonal() {
    this._personal.getPersonal().subscribe((data: any) => {
      this.personal = data.personalFound;
    });
  }
  
  async add() {
    const alert = await this.alertCtrl.create({
      header: 'Agregar Personal',
      inputs: [
        {
          name: ''
        }
      ]
    });
  }

  async deletePersonal( id: string ) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirma',
      message: '<strong>¿Estás seguro de eliminar este registro?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Okay',
          handler: async () => {

            this._personal.deletePersonal(id).subscribe((data: any) => {
              this.getPersonal();
            });

            const toast = await this.toast.create({
              message: 'Registro eliminado',
              duration: 2000
            });
            toast.present();

          }
        }
      ]
    });
    alert.present();
  };

  editPersonal( id: string ) {
    console.log(id)
  }

}
