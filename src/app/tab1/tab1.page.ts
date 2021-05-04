import { CpService } from './../services/cp.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { EstacionService } from '../services/estacion.service';
import { GerentePage } from '../pages/gerente/gerente.page'
import { RepresentantePage } from '../pages/representante/representante.page';
import { AutoridadPage } from '../pages/autoridad/autoridad.page';

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
  
  datos: any = {
    nombre: '',
    correo: '',
    telefono: '',
    codigoP: 0,
    municipio: '',
    estado: '',
    calleNumero: ''
    // idRepresentante: '',
    // idAutoridad: '',
    // idGerente: '',
    // cp:{},
    
  };
  respuestaCP: any = [];
  datosCp: any = [];
  selecion: any = {};
  file : File;
  uploadedFiles: Array <File>
  photoSelected: string | ArrayBuffer;
  
  
  
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private _estacion:EstacionService,
    private navCtrl:NavController,
    private alertController:AlertController,
    public modalCtrl: ModalController,
    private cpService: CpService,
    public toast: ToastController,
    private _estacionService: EstacionService
   ) {
    // const id = this.router.snapshot.paramMap.get('custom_id');
    // this.getEstacionID(id);
    this.getEstacion();
  }

  
  
  cpServices(event) {
    // Servicio funciona en base al ionChange del select
    const codigoPostal = event.detail.value;
    this.cpService.getCp(codigoPostal).subscribe((data: any) => {
      this.respuestaCP = data;
      console.log(this.respuestaCP);
    });
  }
  
  select(event) {
    this.datos.cp = event.target.value;
  }
  
  onPhotoSelected(event): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Vista de la imagen
      const reader = new FileReader();
      reader.onload = e =>this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async form() {
    // console.log(this.datos);
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 3000
    });
    toast.present();
    this._estacionService.post(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }
  
  getEstacion() {
    this._estacionService.getEstacion().subscribe((data: any) => {
      this.datos = data.estacionFound[data.estacionFound.length - 1];
    });
  }
  
  
  getEstacionID(id: string) {
    this._estacion.getEstacionId(id).subscribe((data: any) => {
      this.idEstacion = data._id;
      // this.estacion = data;
      // this.cp = data.cp;
      // this.gerente = data.idGerente;
      // this.autoridad = data.idAutoridad;
      // this.representante = data.idRepresentante;
      console.log(data, ' Esta es tu estacion');
    });
  }

  goSasisopa() {
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
