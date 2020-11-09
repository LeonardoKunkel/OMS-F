import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  arrayEstacion:any=[];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private estacionService: EstacionService,
    private route: Router
  ) {
    this.getEstacion();
  }


  getEstacion(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      for (let index = 0; index < data.length; index++) {
       let cont = {
          name: data[index].nombre,
          type: 'radio',
          label: data[index].nombre,
          value: data[index]._id
       }
        this.arrayEstacion.push(cont);
      }
    });
  }

  async sasisopa(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Estación de Servicio',
      inputs: this.arrayEstacion,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (id) => {
            console.log(id);
            this.route.navigate(['tabs/tab2', {custom_id: id}])
          }
        }
      ]
    });

    await alert.present();
  }

  //El mapa te lleva a la pagina de tabs 3
}
