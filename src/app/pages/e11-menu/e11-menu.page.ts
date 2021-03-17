import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e11-menu',
  templateUrl: './e11-menu.page.html',
  styleUrls: ['./e11-menu.page.scss'],
})
export class E11MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    // console.log(id,'Elemento 1');
  }
  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  lista() {
    this.navCtrl.navigateForward('/e11-menu/e11-lista');
  }

  programaAnual(){
    this.navCtrl.navigateForward('e11-menu/e11-programa-anual-mantenimiento');
    
  }

  goPlanMantenimiento(){
    this.navCtrl.navigateForward('e11-menu/e11-plan-mantenimiento');
  }

  goSolicitud(){
    this.navCtrl.navigateForward('/solicitud-informacion');
  }

}
