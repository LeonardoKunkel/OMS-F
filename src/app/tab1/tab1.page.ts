import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AutoridadPage } from '../pages/autoridad/autoridad.page';
import { GerentePage } from '../pages/gerente/gerente.page';
import { RepresentantePage } from '../pages/representante/representante.page';
import { EstacionPage } from '../pages/estacion/estacion.page';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private authService: AutenticacionService,
    private router: Router,
  ) {}

  async autoridad(){
    const modal = await this.modalCtrl.create({
      component: AutoridadPage
    });
    return await modal.present();
  }

  async gerente(){
    const modal = await this.modalCtrl.create({
      component: GerentePage
    });
    return await modal.present();
  }

  async representante(){
    const modal = await this.modalCtrl.create({
      component: RepresentantePage
    });
    return await modal.present();
  }

  async estacion(){
    const modal = await this.modalCtrl.create({
      component: EstacionPage
    });
    return await modal.present();
  }

  mapa(){
    this.navCtrl.navigateForward('/mapa');
  }
    
  async cerrarSesion() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  abrirCalendario() {
    this.navCtrl.navigateForward('/calendario');
  }

}
