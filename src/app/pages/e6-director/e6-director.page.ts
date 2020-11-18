import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-e6-director',
  templateUrl: './e6-director.page.html',
  styleUrls: ['./e6-director.page.scss'],
})
export class E6DirectorPage implements OnInit {
  datos:any={
    requerimientoFisico:'',
    herramientaEquipo:'',
    equipoProteccionPersonal:'',
    nivelAcademico:'',
    personalCargo:''
  }

  constructor(
    public modalCtrl: ModalController,
   // private route : ActivatedRoute,
  ) { }

  ngOnInit() {
   // const id = this.route.snapshot.paramMap.get('custom_id');
   // console.log(id,'Elemento 6 perfil puesto Director');
  }

  dissmis(){
    this.modalCtrl.dismiss();
  }

}
