import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-autoridad',
  templateUrl: './autoridad.page.html',
  styleUrls: ['./autoridad.page.scss'],
})
export class AutoridadPage implements OnInit {
  datos:any={
    nombre:'',
    apellidos:'',
    telefono:'',
    correo:''
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
