import { ComunicacionService } from './../../services/comunicacion.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  form: any = {
    institucion: '',
    direccion: '',
    funcion: '',
    telefono: '',
    tiempo: ''
  };
  coms: any[] = [];

  constructor( private comsService: ComunicacionService, public toast: ToastController ) { }

  ngOnInit() {
    this.getComs();
  }

  getComs() {
    this.comsService.getComs().subscribe((data: any) => {
      console.log(data);
      this.coms = data.comsFound;
    });
  }

  postComs() {
    this.comsService.postComs(this.form).subscribe((data: any) => {
      console.log(data);
    });
  }

  async delete(id: string) {
    this.comsService.deleteComsId(id).subscribe((data: any) => {
      this.getComs();
    });
    const toast = await this.toast.create({
      message: 'Institución eliminada',
      duration: 1500
    });
    toast.present();
  }
}
