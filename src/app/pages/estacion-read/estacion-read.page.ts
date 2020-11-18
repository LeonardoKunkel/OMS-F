import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-estacion-read',
  templateUrl: './estacion-read.page.html',
  styleUrls: ['./estacion-read.page.scss'],
})
export class EstacionReadPage implements OnInit {

  supEstacion: any[] = [];

  constructor(
    private estacionService: EstacionService,
    public navCrtl: NavController,
    public toast: ToastController,
  ) { }

  ngOnInit() {
    this.getEstacion();
  }

  getEstacion() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      console.log(data);
      this.supEstacion = data;
    });
  }

  async delete(id: string) {
    this.estacionService.deleteEstacionId(id).subscribe((data: any) => {
      console.log(data);
    });
    const toast = await this.toast.create({
      message: 'Estación eliminada',
      duration: 2000
    });
    toast.present();
    this.navCrtl.navigateForward('/tabs/tab1');
  }

}
