import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private authService: AutenticacionService,
    private router: Router,
    private navCtrl: NavController
  ) {}

  async cerrarSesion() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  abrirCalendario() {
    this.navCtrl.navigateForward('/calendario');
  }

}
