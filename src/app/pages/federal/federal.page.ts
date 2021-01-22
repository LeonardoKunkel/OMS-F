import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import {} from '../../../assets/images/ASEA'
@Component({
  selector: 'app-federal',
  templateUrl: './federal.page.html',
  styleUrls: ['./federal.page.scss'],
})
export class FederalPage implements OnInit {
  
  modulos:any=[
    {
      nombre:'CRE',
      nombreCompleto:'Comisión Reguladora de Energía',
      img:'../../../assets/icon/CRE-01.png'
    },
    {
      nombre:'ASEA',
      nombreCompleto:'Agencia de Seguridad, Energía y Ambiente',
      img:'../../../assets/icon/ASEA-01.png'
    },
    {
      nombre:'STPS',
      nombreCompleto:'Secretaría del Trabajo y Previsión Social',
      img:'../../../assets/icon/STPS-01.png'
    },
    {
      nombre:'SAT',
      nombreCompleto:'Servicio de Administración Tributaria',
      img:'../../../assets/icon/SAT.png'
    },
    {
      nombre:'PROFECO',
      nombreCompleto:'Procuraduría Federal del Consumidor',
      img:'../../../assets/icon/PROFECO.jpg'
    },
    {
      nombre:'SENER',
      nombreCompleto:'Secretaría de Energía',
      img:'../../../assets/icon/SENER.png'
    },
  ]

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goCalendar(){
    this.navCtrl.navigateForward('/calendario-cre')
  }

}
