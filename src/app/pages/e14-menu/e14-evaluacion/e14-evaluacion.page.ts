import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { E14evaluacionService } from 'src/app/services/e14evaluacion.service';

@Component({
  selector: 'app-e14-evaluacion',
  templateUrl: './e14-evaluacion.page.html',
  styleUrls: ['./e14-evaluacion.page.scss'],
})
export class E14EvaluacionPage implements OnInit {

  datos: any = {
    fecha1: 0,
    fecha2: 0,
    fecha3: 0,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check9: false,
    check10: false,
    check11: false,
    check12: false,
    check13: false,
    check14: false,
    check15: false,
    check16: false,
    check17: false,
    check18: false,
    check19: false,
    check20: false,
    check21: false,
    check22: false,
    trimestre: ''
  };

  datos2: any = {
    check1: '',
    check2: '',
    check3: '',
    check4: '',
    check5: '',
    check6: '',
    check7: '',
    check8: '',
    check9: '',
    check10: '',
    check11: '',
    check12: '',
    check13: '',
    check14: '',
    check15: '',
    check16: '',
    check17: '',
    check18: '',
    check19: '',
    check20: '',
    check21: '',
    check22: ''
  };

  constructor(
    private evalReqLeg: E14evaluacionService,
    public toast: ToastController,
  ) { }

  ngOnInit() {
    // this.getEvaluacion();
  }

  postEvaluacion() {
    return this.evalReqLeg.postEvaluacionReq(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  cambiar() {
    if (this.datos.check1 === true) {
      this.datos2.check1 = 'Cumple';
    } else {
      this.datos2.check1 = 'No Cumple';
    }
    if (this.datos.check2 === true) {
      this.datos2.check2 = 'Cumple';
    } else {
      this.datos2.check2 = 'No Cumple';
    }
    if (this.datos.check3 === true) {
      this.datos2.check3 = 'Cumple';
    } else {
      this.datos2.check3 = 'No Cumple';
    }
    if (this.datos.check4 === true) {
      this.datos2.check4 = 'Cumple';
    } else {
      this.datos2.check4 = 'No Cumple';
    }
    if (this.datos.check5 === true) {
      this.datos2.check5 = 'Cumple';
    } else {
      this.datos2.check5 = 'No Cumple';
    }
    if (this.datos.check6 === true) {
      this.datos2.check6 = 'Cumple';
    } else {
      this.datos2.check6 = 'No Cumple';
    }
    if (this.datos.check7 === true) {
      this.datos2.check7 = 'Cumple';
    } else {
      this.datos2.check7 = 'No Cumple';
    }
    if (this.datos.check8 === true) {
      this.datos2.check8 = 'Cumple';
    } else {
      this.datos2.check8 = 'No Cumple';
    }
    if (this.datos.check9 === true) {
      this.datos2.check9 = 'Cumple';
    } else {
      this.datos2.check9 = 'No Cumple';
    }
    if (this.datos.check10 === true) {
      this.datos2.check10 = 'Cumple';
    } else {
      this.datos2.check10 = 'No Cumple';
    }
    if (this.datos.check11 === true) {
      this.datos2.check11 = 'Cumple';
    } else {
      this.datos2.check11 = 'No Cumple';
    }
    if (this.datos.check12 === true) {
      this.datos2.check12 = 'Cumple';
    } else {
      this.datos2.check12 = 'No Cumple';
    }
    if (this.datos.check13 === true) {
      this.datos2.check13 = 'Cumple';
    } else {
      this.datos2.check13 = 'No Cumple';
    }
    if (this.datos.check14 === true) {
      this.datos2.check14 = 'Cumple';
    } else {
      this.datos2.check14 = 'No Cumple';
    }
    if (this.datos.check15 === true) {
      this.datos2.check15 = 'Cumple';
    } else {
      this.datos2.check15 = 'No Cumple';
    }
    if (this.datos.check16 === true) {
      this.datos2.check16 = 'Cumple';
    } else {
      this.datos2.check16 = 'No Cumple';
    }
    if (this.datos.check17 === true) {
      this.datos2.check17 = 'Cumple';
    } else {
      this.datos2.check17 = 'No Cumple';
    }
    if (this.datos.check18 === true) {
      this.datos2.check18 = 'Cumple';
    } else {
      this.datos2.check18 = 'No Cumple';
    }
    if (this.datos.check19 === true) {
      this.datos2.check19 = 'Cumple';
    } else {
      this.datos2.check19 = 'No Cumple';
    }
    if (this.datos.check20 === true) {
      this.datos2.check20 = 'Cumple';
    } else {
      this.datos2.check20 = 'No Cumple';
    }
    if (this.datos.check21 === true) {
      this.datos2.check21 = 'Cumple';
    } else {
      this.datos2.check21 = 'No Cumple';
    }
    if (this.datos.check22 === true) {
      this.datos2.check22 = 'Cumple';
    } else {
      this.datos2.check22 = 'No Cumple';
    }
    const fechaa = new Date().getFullYear();
    this.datos.fecha1 = fechaa;
  }

  // getEvaluacion() {
  //   this.evalReqLeg.getEvaluacionReq().subscribe((data: any) => {
  //     this.datos = data.findEvaluacion[data.findEvaluacion.length - 1];
  //     console.log(data.findEvaluacion[data.findEvaluacion.length - 1]);
  //   });
  // }

  async enviarForm() {
    this.postEvaluacion();
    this.cambiar();
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

}
