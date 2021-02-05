import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad';
import { GerenteService } from 'src/app/services/gerente.service';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.page.html',
  styleUrls: ['./gerente.page.scss'],
})
export class GerentePage implements OnInit {

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
    private navCtrl: NavController,
    private _gerenteService: GerenteService
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

  read(){
    this.navCtrl.navigateForward('/gerente-read');
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
    this._gerenteService.postGerente(this.datos).subscribe((data:any)=>{
      console.log(data);
    });
  }

  form(){
    this.post();
    close();
  }


}
