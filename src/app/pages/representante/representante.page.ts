import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad';
import { RepresentanteService } from 'src/app/services/representante.service';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.page.html',
  styleUrls: ['./representante.page.scss'],
})
export class RepresentantePage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'maxwidth':1,
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 300
  };
  
  datos: any = {
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    firma:''
  };

  constructor(
    public modalCtrl: ModalController,
    private _representanteService: RepresentanteService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  read(){
    this.navCtrl.navigateForward('/representante-read');
    this.close();
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL(), 'URL');
    this.datos.firma = this.signaturePad.toDataURL();
  }

  clear(){
    this.signaturePad.clear();
  }

  post(){
    this._representanteService.postRepresentante(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  form() {
    this.post();
    close();
  }

}
