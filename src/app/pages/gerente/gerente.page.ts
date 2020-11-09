import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { GerenteService } from 'src/app/services/gerente.service';

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.page.html',
  styleUrls: ['./gerente.page.scss'],
})
export class GerentePage implements OnInit {
  datos: any = {
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: ''
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
