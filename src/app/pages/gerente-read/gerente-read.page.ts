import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { GerenteService } from 'src/app/services/gerente.service';

@Component({
  selector: 'app-gerente-read',
  templateUrl: './gerente-read.page.html',
  styleUrls: ['./gerente-read.page.scss'],
})
export class GerenteReadPage implements OnInit {

  maximaA: any[] = [];

  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    private _gerenteService: GerenteService
    ) { }

  ngOnInit() {
    this.getGerente();
  }

  getGerente(){
    this._gerenteService.getGerente().subscribe((data: any) => {
      console.log(data);
      this.maximaA = data.gerente;
    });
  }

  async delete(id: string){
    this._gerenteService.deleteGerenteId(id).subscribe((data: any) => {
      console.log(data);
    });
    const toast = await this.toast.create({
      message: 'Gerente de estación eliminado',
      duration: 2000
    });
    toast.present();
    this.navCtrl.navigateForward('/tabs/tab1');
  }

}
