import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { EstacionPage } from './../estacion/estacion.page';
import { GerentePage } from '../gerente/gerente.page'
import { RepresentantePage } from '../representante/representante.page';
import { AutoridadPage } from '../autoridad/autoridad.page';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  arrayEstacion: any = [];
  supEstacion: any[] = [];

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private authService: AutenticacionService,
    private estacionService: EstacionService,
    public modalCtrl: ModalController,
    public toast: ToastController
  ) { }

  ngOnInit() {
    this.getEstacion();
    this.getEntrar();
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

  getEstacion() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      console.log(data);
      this.supEstacion = data;
    });
  }

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
  //   console.log(this.arrayEstacion);
    
  //   // const alert = await this.alertCtrl.create({
  //   //   cssClass: 'my-custom-class',
  //   //   header: 'Seleccione ES',
  //   //   inputs: this.arrayEstacion,
  //   //   buttons: [
  //   //     {
  //   //       text: 'Cancelar',
  //   //       role: 'cancel',
  //   //       cssClass: 'secondary',
  //   //       handler: () => {
  //   //         console.log('Cancelado');
  //   //       }
  //   //     },
  //   //     {
  //   //       text: 'Ok',
  //   //       handler: (id) => {
  //   //         //console.log(id);
  //   //         this.router.navigate(['tabs/tab1', {custom_id: id}]);
  //   //       }
  //   //     }
  //   //   ] 
  //   // });
  //   // await alert.present();
  // }
  
  async entrar() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Seleccione ES',
      inputs: this.arrayEstacion,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Ok',
          handler: (id) => {
            //console.log(id);
            this.router.navigate(['tabs/tab1', {custom_id: id}]);
          }
        }
      ] 
    });
    await alert.present();
  }

  getEntrar() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      for (let j = 0; j < data.length; j++) {
        const conteo = {
          name: data[j].nombre,
          type: 'radio',
          label: data[j].nombre,
          value: data[j]._id
        };
        this.arrayEstacion.push(conteo);
      }
    });
  }


  async estacion() {
    const modal = await this.modalCtrl.create({
      component: EstacionPage
    });
    return await modal.present();
  }

  async goRepresentante(){
    const modal = await this.modalCtrl.create({
      component: RepresentantePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
    // this.navCtrl.navigateForward('/representante')
  }

  async goGerente(){
    const modal = await this.modalCtrl.create({
      component: GerentePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async goAutoridad(){
    const modal = await this.modalCtrl.create({
      component: AutoridadPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
