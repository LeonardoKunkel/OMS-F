import { E2RiesgosService } from './../../../services/e2-riesgos.service';
import { RiesgosModalPage } from './riesgos-modal/riesgos-modal.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-e2-riesgos',
  templateUrl: './e2-riesgos.page.html',
  styleUrls: ['./e2-riesgos.page.scss'],
})
export class E2RiesgosPage implements OnInit {

  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
  };

  constructor(
    public toast: ToastController,
    private modalCtrl: ModalController,
    private riesgosService: E2RiesgosService,
    private alertCtrl: AlertController
  ) { this.getRiesgos(); }

  ngOnInit() {
  }

  getRiesgos() {
    this.riesgosService.getRiesgos().subscribe((data: any) => {
      console.log(data.riesgos[data.riesgos.length - 1]);
      this.datos = data.riesgos[data.riesgos.length - 1];
    });
  }

  async criterios() {
    const modal = await this.modalCtrl.create({
      component: RiesgosModalPage,
    });
    await modal.present();
  }

  async enviarForm(formulario) {
    console.log(this.datos);

    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
    const magnitud1 = this.datos.F1 + this.datos.C1;
    this.datos.M1 = '';
    switch (magnitud1) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M1 = 'IV';
        break;
      case 5:
        this.datos.M1 = 'III';
        break;
      case 6:
        this.datos.M1 = 'II';
        break;
      case 7:
        this.datos.M1 = 'I';
        break;
      case 8:
        this.datos.M1 = 'I';
        break;
    }
    const magnitud2 = this.datos.F2 + this.datos.C2;
    this.datos.M2 = '';
    switch (magnitud2) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M2 = 'IV';
        break;
      case 5:
        this.datos.M2 = 'III';
        break;
      case 6:
        this.datos.M2 = 'II';
        break;
      case 7:
        this.datos.M2 = 'I';
        break;
      case 8:
        this.datos.M2 = 'I';
        break;
    }
    const magnitud3 = this.datos.F3 + this.datos.C3;
    this.datos.M3 = '';
    switch (magnitud3) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M3 = 'IV';
        break;
      case 5:
        this.datos.M3 = 'III';
        break;
      case 6:
        this.datos.M3 = 'II';
        break;
      case 7:
        this.datos.M3 = 'I';
        break;
      case 8:
        this.datos.M3 = 'I';
        break;
    }
    const magnitud4 = this.datos.F4 + this.datos.C4;
    this.datos.M4 = '';
    switch (magnitud4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M4 = 'IV';
        break;
      case 5:
        this.datos.M4 = 'III';
        break;
      case 6:
        this.datos.M4 = 'II';
        break;
      case 7:
        this.datos.M4 = 'I';
        break;
      case 8:
        this.datos.M4 = 'I';
        break;
    }
    const magnitud5 = this.datos.F5 + this.datos.C5;
    this.datos.M5 = '';
    switch (magnitud5) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M5 = 'IV';
        break;
      case 5:
        this.datos.M5 = 'III';
        break;
      case 6:
        this.datos.M5 = 'II';
        break;
      case 7:
        this.datos.M5 = 'I';
        break;
      case 8:
        this.datos.M5 = 'I';
        break;
    }
    const magnitud6 = this.datos.F6 + this.datos.C6;
    this.datos.M6 = '';
    switch (magnitud6) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M6 = 'IV';
        break;
      case 5:
        this.datos.M6 = 'III';
        break;
      case 6:
        this.datos.M6 = 'II';
        break;
      case 7:
        this.datos.M6 = 'I';
        break;
      case 8:
        this.datos.M6 = 'I';
        break;
    }
    const magnitud7 = this.datos.F7 + this.datos.C7;
    this.datos.M7 = '';
    switch (magnitud7) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M7 = 'IV';
        break;
      case 5:
        this.datos.M7 = 'III';
        break;
      case 6:
        this.datos.M7 = 'II';
        break;
      case 7:
        this.datos.M7 = 'I';
        break;
      case 8:
        this.datos.M7 = 'I';
        break;
    }
    const magnitud8 = this.datos.F8 + this.datos.C8;
    this.datos.M8 = '';
    switch (magnitud8) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M8 = 'IV';
        break;
      case 5:
        this.datos.M8 = 'III';
        break;
      case 6:
        this.datos.M8 = 'II';
        break;
      case 7:
        this.datos.M8 = 'I';
        break;
      case 8:
        this.datos.M8 = 'I';
        break;
    }
    const magnitud9 = this.datos.F9 + this.datos.C9;
    this.datos.M9 = '';
    switch (magnitud9) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M9 = 'IV';
        break;
      case 5:
        this.datos.M9 = 'III';
        break;
      case 6:
        this.datos.M9 = 'II';
        break;
      case 7:
        this.datos.M9 = 'I';
        break;
      case 8:
        this.datos.M9 = 'I';
        break;
    }
    const magnitud10 = this.datos.F10 + this.datos.C10;
    this.datos.M10 = '';
    switch (magnitud10) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M10 = 'IV';
        break;
      case 5:
        this.datos.M10 = 'III';
        break;
      case 6:
        this.datos.M10 = 'II';
        break;
      case 7:
        this.datos.M10 = 'I';
        break;
      case 8:
        this.datos.M10 = 'I';
        break;
    }
    const magnitud11 = this.datos.F11 + this.datos.C11;
    this.datos.M11 = '';
    switch (magnitud11) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M11 = 'IV';
        break;
      case 5:
        this.datos.M11 = 'III';
        break;
      case 6:
        this.datos.M11 = 'II';
        break;
      case 7:
        this.datos.M11 = 'I';
        break;
      case 8:
        this.datos.M11 = 'I';
        break;
    }
    const magnitud12 = this.datos.F12 + this.datos.C12;
    this.datos.M12 = '';
    switch (magnitud12) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M12 = 'IV';
        break;
      case 5:
        this.datos.M12 = 'III';
        break;
      case 6:
        this.datos.M12 = 'II';
        break;
      case 7:
        this.datos.M12 = 'I';
        break;
      case 8:
        this.datos.M12 = 'I';
        break;
    }
    const magnitud13 = this.datos.F13 + this.datos.C13;
    this.datos.M13 = '';
    switch (magnitud13) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M13 = 'IV';
        break;
      case 5:
        this.datos.M13 = 'III';
        break;
      case 6:
        this.datos.M13 = 'II';
        break;
      case 7:
        this.datos.M13 = 'I';
        break;
      case 8:
        this.datos.M13 = 'I';
        break;
    }
    const magnitud14 = this.datos.F14 + this.datos.C14;
    this.datos.M14 = '';
    switch (magnitud14) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M14 = 'IV';
        break;
      case 5:
        this.datos.M14 = 'III';
        break;
      case 6:
        this.datos.M14 = 'II';
        break;
      case 7:
        this.datos.M14 = 'I';
        break;
      case 8:
        this.datos.M14 = 'I';
        break;
    }
    const magnitud15 = this.datos.F15 + this.datos.C15;
    this.datos.M15 = '';
    switch (magnitud15) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M15 = 'IV';
        break;
      case 5:
        this.datos.M15 = 'III';
        break;
      case 6:
        this.datos.M15 = 'II';
        break;
      case 7:
        this.datos.M15 = 'I';
        break;
      case 8:
        this.datos.M15 = 'I';
        break;
    }
    const magnitud16 = this.datos.F16 + this.datos.C16;
    this.datos.M16 = '';
    switch (magnitud16) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M16 = 'IV';
        break;
      case 5:
        this.datos.M16 = 'III';
        break;
      case 6:
        this.datos.M16 = 'II';
        break;
      case 7:
        this.datos.M16 = 'I';
        break;
      case 8:
        this.datos.M16 = 'I';
        break;
    }
    const magnitud17 = this.datos.F17 + this.datos.C17;
    this.datos.M17 = '';
    switch (magnitud17) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M17 = 'IV';
        break;
      case 5:
        this.datos.M17 = 'III';
        break;
      case 6:
        this.datos.M17 = 'II';
        break;
      case 7:
        this.datos.M17 = 'I';
        break;
      case 8:
        this.datos.M17 = 'I';
        break;
    }
    const magnitud18 = this.datos.F18 + this.datos.C18;
    this.datos.M18 = '';
    switch (magnitud18) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        this.datos.M18 = 'IV';
        break;
      case 5:
        this.datos.M18 = 'III';
        break;
      case 6:
        this.datos.M18 = 'II';
        break;
      case 7:
        this.datos.M18 = 'I';
        break;
      case 8:
        this.datos.M18 = 'I';
        break;
    }

    this.riesgosService.postRiesgos(this.datos).subscribe(data => {
      console.log(data);
    });
  }

}
