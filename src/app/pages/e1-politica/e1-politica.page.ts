import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-e1-politica',
  templateUrl: './e1-politica.page.html',
  styleUrls: ['./e1-politica.page.scss'],
})
export class E1PoliticaPage implements OnInit {
  datosEstacion: any = {};
  @ViewChild('politica1') politicaUno;
  @ViewChild('politica2') politicaDos;
  @ViewChild('politica3') politicaTres;
  politicaEscogida:'';

  constructor(
    private route: ActivatedRoute,
    public alertCtrl: AlertController,
    private _estacionService : EstacionService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    // console.log('Id seleccionado Politica:',id);
    this.getEstacion(id);
  }

  getEstacion(id: string){
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      this.datosEstacion = data;
    });
  }

  options(e){
    let result = e.target.value;
    if (result === 'politica1') {
      let politica1 = this.politicaUno.nativeElement.innerText;
      this.politicaEscogida = politica1;
      // console.log(politica1);
    }else if(result === 'politica2'){
      let politica2 = this.politicaDos.nativeElement.innerText;
      this.politicaEscogida = politica2;
      // console.log(politica2);
    }else if(result === 'politica3'){
      let politica3 = this.politicaTres.nativeElement.innerText;
      this.politicaEscogida = politica3;
      // console.log(politica3);
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
            this.politicaEscogida = e.politicaCreada;
          }
        }
      ]
    });

    await alert.present();
  }

  pdf(){
    const dd ={
      content:[
        'texto Libre',
        {text:`${this.politicaEscogida}`,fontSize:10, bold:true}
      ]
    };

    pdfMake.createPdf(dd).open();
    // console.log(this.politicaEscogida);
    //Nadamas falta guardar la politica escogida a la base de datos
  }

}
