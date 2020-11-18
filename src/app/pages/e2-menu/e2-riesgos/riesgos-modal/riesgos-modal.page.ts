import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-riesgos-modal',
  templateUrl: './riesgos-modal.page.html',
  styleUrls: ['./riesgos-modal.page.scss'],
})
export class RiesgosModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
