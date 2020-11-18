import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-e6-representante-tecnico',
  templateUrl: './e6-representante-tecnico.page.html',
  styleUrls: ['./e6-representante-tecnico.page.scss'],
})
export class E6RepresentanteTecnicoPage implements OnInit {
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
