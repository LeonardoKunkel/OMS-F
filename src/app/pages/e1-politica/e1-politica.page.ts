import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e1-politica',
  templateUrl: './e1-politica.page.html',
  styleUrls: ['./e1-politica.page.scss'],
})
export class E1PoliticaPage implements OnInit {
  datosEstacion:any={};
  @ViewChild('politica1') politicaUno;
  @ViewChild('politica2') politicaDos;
  @ViewChild('politica3') politicaTres;

  constructor(
    private route: ActivatedRoute,
    public alertCtrl: AlertController,
    private _estacionService : EstacionService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    //console.log('Id seleccionado Politica:',id);
    this.getEstacion(id);
  }

  getEstacion(id:String){
    this._estacionService.getEstacionId(id).subscribe((data:any) =>{
      this.datosEstacion = data;
    })
  }
  
  options(e){
    let result = e.target.value;
    if (result === 'politica1') {
      let politica1 = this.politicaUno.nativeElement.innerText;
      console.log(politica1);
    }else if(result === 'politica2'){
      let politica2 = this.politicaDos.nativeElement.innerText;
      console.log(politica2);
    }else if(result === 'politica3'){
      let politica3 = this.politicaUno.nativeElement.innerText;
      console.log(politica3);
    }
    
    
  }

  async myPolitica(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Crear Politíca',
      subHeader: 'Subtitle',
      message: 'En este apartado puedes crar tu propia politíca de la Estación de Servicio',
      inputs: [
        {
          name: 'politicaCreada',
          type: 'textarea',
          placeholder: 'Placeholder 1'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (e) => {
            console.log(e);
          }
        }
      ]
    });

    await alert.present();
  }

}
