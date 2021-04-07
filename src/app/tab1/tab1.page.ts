import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { EstacionService } from '../services/estacion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  arrayTanques:any=[];
  estacion:any={};
  cp:any={};
  gerente:any={};
  autoridad:any={};
  representante:any={};
  idEstacion:'';
  constructor(
    private router:ActivatedRoute,
    private route: Router,
    private _estacion:EstacionService,
    private navCtrl:NavController,
    private alertController:AlertController

   ) {
    const id = this.router.snapshot.paramMap.get('custom_id');
    this.getEstacionID(id);
  }

  getEstacionID(id:string){
    this._estacion.getEstacionId(id).subscribe((data: any)=>{
      this.idEstacion = data._id;
      this.estacion = data;
      this.cp = data.cp;
      this.gerente = data.idGerente;
      this.autoridad = data.idAutoridad;
      this.representante = data.idRepresentante;
      console.log(data, ' Esta es tu estacion');
    });
  }

  goSasisopa(){
    // console.log('Hola mundo', this.idEstacion);
    this.route.navigate(['/tabs/tab2', {custom_id: this.idEstacion}]);
    
  }

  // abrirCalendario() {
  //   this.navCtrl.navigateForward('/calendario');
  // }

  // grafica() {
  //   this.navCtrl.navigateForward('/grafica');
  // }
  
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [ 
        {
          name: 'producto',
          type: 'text',
          value: '',
          placeholder:'MAGNA...'

        }, 
        {
          name: 'siglas',
          type: 'text',
          value: '',
          placeholder:'MG...'
        }, 
        {
          name: 'noTanques',
          type: 'number',
          value: '',
          placeholder:'3..'
        }, 
        {
          name: 'noDispensarios',
          type: 'number',
          value: '',
          placeholder:'3..'
        },
      ],
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
          handler: (e) => {

            this.arrayTanques.push(e);

            console.log(this.arrayTanques);
            

          }
        }
      ]
    });

    await alert.present();
  }

}
