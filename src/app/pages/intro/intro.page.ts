import { AutoridadService } from 'src/app/services/autoridad.service';
import { GerenteService } from './../../services/gerente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { EstacionPage } from './../estacion/estacion.page';
import { GerentePage } from '../gerente/gerente.page'
import { RepresentantePage } from '../representante/representante.page';
import { AutoridadPage } from '../autoridad/autoridad.page';
import { RepresentanteService } from 'src/app/services/representante.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  arrayEstacion: any = [];
  estacion: any = {};
  gerente: any = {};
  autoridad: any = {};
  representante: any = {};

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private authService: AutenticacionService,
    private estacionService: EstacionService,
    public modalCtrl: ModalController,
    public toast: ToastController,
    private _gerente: GerenteService,
    private _autoridad: AutoridadService,
    private _repTec: RepresentanteService
  ) {  }

  ngOnInit() {
    this.getEstacion();
    // this.getEntrar();
    this.getGerente();
    this.getRepresentante();
    this.getMaximaAutoridad();
  }

  getEstacion() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      // console.log(data.estacionFound);
      this.estacion = data.estacionFound[0];
    });
  }

  getGerente() {
    this._gerente.getGerente().subscribe((data: any) => {
      // console.log(data);
      this.gerente = data.gerente[0];
    });
  }

  getRepresentante() {
    this._repTec.getRepresentante().subscribe((data: any) => {
      // console.log(data.representante[0]);
      this.representante = data.representante[0];
    });
  }

  getMaximaAutoridad() {
    this._autoridad.getAutoridad().subscribe((data: any) => {
      // console.log(data.autoridad[0]);
      this.autoridad = data.autoridad[0];
    });
  }

  sasisopa() {
    this.navCtrl.navigateForward('/menu-sasisopa');
  }

  registro() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  //Log Out
  async cerrarSesion() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  //pull-down Refresh
    doRefresh(event){
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        this.getEstacion();
        event.target.complete();
      }, 2000);
    }


  //Dark Mode

  toogleTheme($event){
    if ($event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else{
     document.body.setAttribute('color-theme', 'ligth');
    }
 }

 //Maps
  mapa() {
    this.navCtrl.navigateForward('/mapa');
  }

  //function for DB

  

  async delete(id: string) {
    this.estacionService.deleteEstacionId(id).subscribe((data: any) => {
      console.log(data);
    });
    const toast = await this.toast.create({
      message: 'Estación eliminada',
      duration: 2000
    });
    toast.present();
  }

  //Go To Pages

  
  // async entrar() {
  //   const alert = await this.alertCtrl.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Seleccione ES',
  //     inputs: this.arrayEstacion,
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Cancelado');
  //         }
  //       },
  //       {
  //         text: 'Ok',
  //         handler: (id) => {
  //           this.router.navigate(['tabs/tab1', {custom_id: id}]);
  //         }
  //       }
  //     ] 
  //   });
  //   await alert.present();
  // }

  // getEntrar() {
  //   this.estacionService.getEstacion().subscribe((data: any) => {
  //     for (let j = 0; j < data.length; j++) {
  //       const conteo = {
  //         name: data[j].nombre,
  //         type: 'radio',
  //         label: data[j].nombre,
  //         value: data[j]._id
  //       };
  //       this.arrayEstacion.push(conteo);
  //     }
  //   });
  // }


  // async estacion() {
  //   const modal = await this.modalCtrl.create({
  //     component: EstacionPage
  //   });
  //   return await modal.present();
  // }

  // async goRepresentante(){
  //   const modal = await this.modalCtrl.create({
  //     component: RepresentantePage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  //   // this.navCtrl.navigateForward('/representante')
  // }

  // async goGerente(){
  //   const modal = await this.modalCtrl.create({
  //     component: GerentePage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }

  // async goAutoridad(){
  //   const modal = await this.modalCtrl.create({
  //     component: AutoridadPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  // }

}
