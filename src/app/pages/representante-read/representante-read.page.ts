import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { GerenteService } from 'src/app/services/gerente.service';
import { RepresentanteService } from 'src/app/services/representante.service';

@Component({
  selector: 'app-representante-read',
  templateUrl: './representante-read.page.html',
  styleUrls: ['./representante-read.page.scss'],
})
export class RepresentanteReadPage implements OnInit {
  maximaA: any[] = [];

  constructor(
    private representanteService: RepresentanteService,
    public navCtrl: NavController,
    public toast: ToastController,
    private gerenteService: GerenteService
  ) { }

  ngOnInit() {
    this.getRepresentante();
  }

  getRepresentante(){
    this.representanteService.getRepresentante().subscribe((data: any) => {
      console.log(data);
      this.maximaA = data.representante;
    });
  }

  async delete(id: string){
    this.representanteService.deleteRepresentanteId(id).subscribe((data: any) => {
      console.log(data);
    });
    const toast = await this.toast.create({
      message: 'Representante eliminado',
      duration: 2000
    });
    toast.present();
    this.navCtrl.navigateForward('/tabs/tab1');
  }

}
