import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { E2AspectosService } from 'src/app/services/e2-aspectos.service';
import { AspectosModalPage } from './aspectos-modal/aspectos-modal.page';
@Component({
  selector: 'app-e2-aspectos',
  templateUrl: './e2-aspectos.page.html',
  styleUrls: ['./e2-aspectos.page.scss'],
})
export class E2AspectosPage implements OnInit {
  
  actividades: any[] = [];

  constructor(
    public toast: ToastController,
    public modalController: ModalController,
    private aspectosService: E2AspectosService
  ) { }

  ngOnInit() {
    this.getActividades();
  }

  getActividades() {
    this.aspectosService.getAspectos().subscribe((act: any) => {
      this.actividades = act.aspectosFound;
      console.log(this.actividades);
    })
  }

  async help() {
    const modal = await this.modalController.create({
      component: AspectosModalPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  // calculo() {

  //   for (let i = 0; i < this.aspectosAmbientales.length; i++) {
  //     for (let j = 0; j < this.aspectosAmbientales[i].array.length; j++) {
  //       let F = parseInt(this.aspectosAmbientales[i].array[j].F); 
  //       let N = parseInt(this.aspectosAmbientales[i].array[j].N);
  //       let M = parseInt(this.aspectosAmbientales[i].array[j].M);
  //       let sumaTotal = F + N + M;
  //       this.aspectosAmbientales[i].array[j].VT = sumaTotal;
  //       this.arrayNew.push(sumaTotal);
  //     }
  //   }
  //   var top12 = this.arrayNew.sort(function (a, b) { return b - a; }).slice(0, 12);
  //   var topEnd = top12.length - 1;

  //   for (let i = 0; i < this.aspectosAmbientales.length; i++) {
  //     for (let index = 0; index < this.aspectosAmbientales[i].array.length; index++) {
  //       const validacion = this.aspectosAmbientales[i].array[index].VT >= topEnd ? 'Si' : 'No';
  //       this.aspectosAmbientales[i].array[index].AAS = validacion;
  //     }
  //   }
  // }

  pdf() {
    
  }
}
