import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-sasisopa',
  templateUrl: './menu-sasisopa.page.html',
  styleUrls: ['./menu-sasisopa.page.scss'],
})
export class MenuSasisopaPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  goPuntoUno() {
    this.navCtrl.navigateForward('/e1-menu');
  }
  goPuntoDos() {
    this.navCtrl.navigateForward('/e2-menu');
  }
  goPuntoTres() {
    this.navCtrl.navigateForward('/e3-menu');
  }
  goPuntoCuatro() {
    this.navCtrl.navigateForward('/e4-menu');
  }
  goPuntoCinco() {
    this.navCtrl.navigateForward('/e5-menu');
  }
  goPuntoSeis() {
    this.navCtrl.navigateForward('/e6-menu');
  }
  goPuntoSiete() {
    this.navCtrl.navigateForward('/e7-menu');
  }
  goPuntoOcho() {
    this.navCtrl.navigateForward('/e8-menu');
  }
  goPuntoNueve() {
    this.navCtrl.navigateForward('/e9-menu');
  }
  goPuntoDiez() {
    this.navCtrl.navigateForward('/e10-menu');
  }
  goPuntoOnce() {
    this.navCtrl.navigateForward('/e11-menu');
  }
  goPuntoDoce() {
    this.navCtrl.navigateForward('/e12-menu');
  }
  goPuntoTrece() {
    this.navCtrl.navigateForward('/e13-menu');
  }
  goPuntoCatorce() {
    this.navCtrl.navigateForward('/e14-menu');
  }
  goPuntoQuince() {
    this.navCtrl.navigateForward('/e15-menu');
  }
  goPuntoDieciseis() {
    this.navCtrl.navigateForward('/e16-menu');
  }
  goPuntoDiecisiete() {
    this.navCtrl.navigateForward('/e17-menu');
  }
  goElemento18() {
    this.navCtrl.navigateForward('/e18-procedimiento');
  }
}
