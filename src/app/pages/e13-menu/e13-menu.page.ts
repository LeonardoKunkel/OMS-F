import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionService } from 'src/app/services/estacion.service';

@Component({
  selector: 'app-e13-menu',
  templateUrl: './e13-menu.page.html',
  styleUrls: ['./e13-menu.page.scss'],
})
export class E13MenuPage implements OnInit {
  DataEstacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private _estacionService: EstacionService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    this.getEstacion(id);
    //console.log(id,'Elemento 1');
  }
  getEstacion(id: string) {
    this._estacionService.getEstacionId(id).subscribe((data: any) => {
      console.log(data);
      this.DataEstacion = data;
    });
  }

  goPrograma() {
    this.navCtrl.navigateForward('/e13-menu/e13-programa');
  }

  goActa() {
    this.navCtrl.navigateForward('/e13-menu/e13-acta');
  }

  goProcedure() {
    this.navCtrl.navigateForward('/e13-menu/e13-procedimiento');
  }
}
