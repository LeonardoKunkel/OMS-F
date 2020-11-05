import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RepresentanteService } from 'src/app/services/representante.service';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.page.html',
  styleUrls: ['./representante.page.scss'],
})
export class RepresentantePage implements OnInit {
  datos:any={
    nombre:'',
    apellidos:'',
    telefono:'',
    correo:''
  }

  constructor(
    public modalCtrl:ModalController,
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

  post(){
    this._representanteService.postRepresentante(this.datos).subscribe((data:any)=>{
      console.log(data);
    });
  }

  form(){
    this.post();
    close();
  }

}
