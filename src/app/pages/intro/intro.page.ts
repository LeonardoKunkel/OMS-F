import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EstacionService } from 'src/app/services/estacion.service';
import { EstacionPage } from './../estacion/estacion.page';

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

  async cerrarSesion() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

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

  async estacion() {
    const modal = await this.modalCtrl.create({
      component: EstacionPage
    });
    return await modal.present();
  }

}
