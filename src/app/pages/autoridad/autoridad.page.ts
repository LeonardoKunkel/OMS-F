import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-autoridad',
  templateUrl: './autoridad.page.html',
  styleUrls: ['./autoridad.page.scss'],
})
export class AutoridadPage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'maxwidth':1,
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 300
  };
  
  datos:any={
    nombre:'',
    apellidos:'',
    telefono:'',
    correo:'',
    firma:'',
  }

  constructor(
    public modalCtrl:ModalController,
    private _autoridad:AutoridadService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  read(){
    this.navCtrl.navigateForward('/autoridad-read');
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
    this._autoridad.postAutoridad(this.datos).subscribe((data:any)=>{
      console.log(data);
    });
  }

  form(){
    this.post();
    close();
  }
  

}
